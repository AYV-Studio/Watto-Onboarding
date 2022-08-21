import { Body, Controller , Delete, Get, Param, Post, Put, UseGuards  } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import {UserRO } from '../models/user.interface';
import { UsersService } from '../users.service';
import {User} from './user.decorator'
import { CreateUserDto, UpdateUserDto, LoginUserDto } from '../dto';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
@Controller('user')
export class UserController {
    constructor(private usersService:UsersService){}

    @UseGuards(AuthGuard()) 
    @Get('user')
    async findMe(@User('email') email: string): Promise<UserRO> {
        return await this.usersService.findByEmail(email);
      }
   
   

}
