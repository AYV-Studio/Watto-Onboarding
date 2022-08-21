import { Injectable } from '@nestjs/common';
import { CarPostEntity } from '../models/post.entity';
import {DeleteResult, Repository, UpdateResult} from'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CarPost } from '../models/post.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class CarService {
    findAllPostes(): Observable<CarPost[]> {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(CarPostEntity)
        private readonly carPostRepository: Repository<CarPostEntity>
    ){}
        createPost(carPost:CarPost): Observable<CarPost> {
            return from (this.carPostRepository.save(carPost));
        }
        findAllPosts():Observable<CarPost[]> {
            return from(this.carPostRepository.find());
        }
        updatePost(id:number,carPost:CarPost):Observable<UpdateResult>{
            return from (this.carPostRepository.update(id,carPost))

        }
        deletePost(id:number):Observable<DeleteResult>{
            return from (this.carPostRepository.delete(id))
        }
}
