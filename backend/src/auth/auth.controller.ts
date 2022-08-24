import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from 'src/users/dto';
import { AuthService } from './auth.service';
import { RegistrationStatus } from './registrationStatus.interface';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: 
        AuthService) {}
        @Post('register')  
         async register(@Body() createUserDto: CreateUserDto,  ): Promise<RegistrationStatus> {    
            const result: 
            RegistrationStatus = await this.authService.register(createUserDto,);
            if (!result.success) {
                throw new HttpException(result.message, HttpStatus.BAD_REQUEST);    
            }
            return result;  
        }
        @Post('login')  
         async login(@Body() loginUserDto: LoginUserDto){
    return await this.authService.login(loginUserDto);  
}

}
