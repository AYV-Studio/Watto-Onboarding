import { Injectable } from '@nestjs/common';
import { UserEntity } from './models/user.entity';
import { Repository, UpdateResult} from'typeorm';
const jwt = require('jsonwebtoken');
import { SECRET } from '../config';
import{LoginUserDto, UpdateUserDto,CreateUserDto} from './dto'
import { InjectRepository } from '@nestjs/typeorm';
import { UserRO } from './models/user.interface';
import { from, Observable } from 'rxjs';

// This should be a real class/interface representing a user entity
//export type User = any;

@Injectable()
export class UsersService {
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>){}

  /*private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];*/
  

  async findByEmail(email: string): Promise<UserRO>{
    const user = await this.userRepository.findOne(email);
    return this.buildUserRO(user);
  }

  public generateJWT(user) {
    let today = new Date();
    let exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
      id: user.id,
      username: user.username,
      email: user.email,
      exp: exp.getTime() / 1000,
    }, SECRET);
  };
  private buildUserRO(user: UserEntity) {
    const userRO = {
      id: user.id,
      email: user.email,
      userName: user.userName,
      token: this.generateJWT(user),
      isAdmin: user.isAdmin
    };

    return {user: userRO};
  }
}