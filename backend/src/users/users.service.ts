import { Injectable } from '@nestjs/common';
import { UserEntity } from './models/user.entity';
import { Repository, UpdateResult} from'typeorm';
import{LoginUserDto, UpdateUserDto,CreateUserDto} from './dto'
import { InjectRepository } from '@nestjs/typeorm';
import { UserRO } from './models/user.interface';
import { from, Observable } from 'rxjs';

// This should be a real class/interface representing a user entity
//export type User = any;

@Injectable()
export class UsersService {
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

  async findOne({ email, password}: LoginUserDto): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ email,password});
    if (!user) {
      return null;
    }
  }
}