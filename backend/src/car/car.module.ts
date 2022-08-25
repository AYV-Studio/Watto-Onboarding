import { Module } from '@nestjs/common';
import { CarService } from './services/car.service';
import { CarController } from './controllers/car.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarPostEntity } from './models/post.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([CarPostEntity])],
  providers: [CarService],
  controllers: [CarController],
})
export class CarModule {}
