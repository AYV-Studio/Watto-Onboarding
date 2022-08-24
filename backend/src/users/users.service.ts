import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from './models/user.entity';
import { Repository, UpdateResult} from'typeorm';
const jwt = require('jsonwebtoken');
import { SECRET } from '../config';
import{LoginUserDto, UpdateUserDto,CreateUserDto, toUserDto} from './dto'
import { InjectRepository } from '@nestjs/typeorm';
import { UserRO } from './models/user.interface';
import { from, Observable } from 'rxjs';
import { UserDto } from './dto/UserDto';
import * as bcrypt from 'bcrypt';

// This should be a real class/interface representing a user entity
//export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,){}

  async findOne(options?: object): Promise<UserDto> {
    const user =  await this.userRepository.findOne(options);    
    return toUserDto(user);  
}
async findByLogin({ email, password }: LoginUserDto): Promise<UserDto> {    
  const user = await this.userRepository.findOne({ where: { email} });
  
  if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
  }
  
  // compare passwords    
  const areEqual = await bcrypt.compare(user.password, password);
  
  if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
  }
  
  return toUserDto(user);  
}
async findByPayload({ username }: any): Promise<UserDto> {
  return await this.findOne({ 
      where:  { username } });  
}
async create(userDto: CreateUserDto): Promise<UserDto> {    
  const { username, password, email } = userDto;
  
  // check if the user exists in the db    
  const userInDb = await this.userRepository.findOne({ 
      where: { username } 
  });
  if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);    
  }
  
  const user: UserEntity = await this.userRepository.create({ username, password, email, });
  await this.userRepository.save(user);
  return toUserDto(user);  
}
  /*public generateJWT(user) {
    let today = new Date();
    let exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
      id: user.id,
      username: user.username,
      email: user.email,
      exp: exp.getTime() / 1000,
    }, SECRET);
  };*/
  /*private buildUserRO(user: UserEntity) {
    const userRO = {
      id: user.id,
      email: user.email,
      userName: user.userName,
      password:user.password,
      token: this.generateJWT(user),
      isAdmin: user.isAdmin
    };

    return {user: userRO};
  }*/
}