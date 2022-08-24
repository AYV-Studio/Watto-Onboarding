import { Column,CreateDateColumn,Entity,PrimaryGeneratedColumn } from 'typeorm';

@Entity('car_post')
export class CarPostEntity{
@PrimaryGeneratedColumn()
id:number;

@Column( {default: ''})
carName:string;

@Column( {default: ''})
description:string;

@Column( {default: ''})
img:string;

@CreateDateColumn()
createdAt:Date;

}