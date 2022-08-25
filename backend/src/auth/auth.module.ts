import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';



@Module({
  imports: [UsersModule,
      PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
  }),
     JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  providers: [AuthService,JwtStrategy],
  exports: [AuthService, PassportModule, 
    JwtModule],
  controllers: [AuthController],
})
export class AuthModule {}
