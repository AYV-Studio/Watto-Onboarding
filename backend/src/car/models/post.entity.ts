import { Column,CreateDateColumn,Entity,PrimaryGeneratedColumn } from 'typeorm';

@Entity('car_post')
export class CarPostEntity{
@PrimaryGeneratedColumn()
id:number;

@Column( {default: ''})
body:string;

@CreateDateColumn()
createdAt:Date;

}