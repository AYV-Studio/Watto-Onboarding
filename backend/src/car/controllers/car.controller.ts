import { Body, Controller , Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CarPostEntity } from '../models/post.entity';
import { CarPost } from '../models/post.interface';
import { CarService } from '../services/car.service';

@Controller('car')
export class CarController {
    constructor(private carService:CarService){}
    @Post()
    create(@Body() post: CarPost): Observable<CarPost>  {
return this.carService.createPost(post)
    }
    @Get()
    findAll():Observable<CarPost[]>{
       return this.carService.findAllPosts(); 
    }
    @Put(':id')
    update(
        @Param('id') id:number,
        @Body() carPost:CarPost
    ): Observable<UpdateResult>{
        return this.carService.updatePost(id, carPost)
    }

    @Delete(':id')
    delete(
        @Param('id') id:number ):Observable<DeleteResult>{
            return this.carService.deletePost(id)
        }
        }
