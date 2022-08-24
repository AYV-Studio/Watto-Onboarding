import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import {UserRO} from '../users/models/user.interface'
import { CreateUserDto, LoginUserDto, UserDto } from 'src/users/dto';
import { RegistrationStatus } from './registrationStatus.interface';
import { JwtPayload } from './JwtPayload.interface';
@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        ) {}
        async register(userDto: CreateUserDto): Promise <RegistrationStatus> {
    let status: RegistrationStatus = {
        success: true,   
        message: 'user registered',
    };
    try {
        await this.usersService.create(userDto);
    } catch (err) {
        status = {
            success: false,        
            message: err,
        };    
    }
    return status;  
}
    async login(loginUserDto: LoginUserDto) {    
  // find user in db    
  const user = await this.usersService.findByLogin(loginUserDto);
  
  // generate and sign token    
  const token = this._createToken(user);
  
  return {
      username: user.username, ...token,    
  };  
}

private _createToken({ username }: UserDto): any {
  const user: JwtPayload = { username };    
  const accessToken = this.jwtService.sign(user);    
  return {
      expiresIn:'60s',
      accessToken,    
  };  
}
async validateUser(payload:JwtPayload): Promise<UserDto> {
  const user = await this.usersService.findByPayload(payload);    
  if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);    
  }    
  return user;  
}
        

    /*async validateUser(email: string, pass: string): Promise<any> {
      const user = await this.usersService.findOne(email);
      if (user && user. === email) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }
    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
    }*/
}

