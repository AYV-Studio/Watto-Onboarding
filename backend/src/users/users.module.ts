import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './user/user.controller';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}
