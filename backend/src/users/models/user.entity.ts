import { Column,PrimaryColumn,CreateDateColumn,Entity,PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';


@Entity('user')
export class UserEntity{
@PrimaryGeneratedColumn()
id:number;

@PrimaryColumn()
@IsEmail()
email:string;

@Column()
password:string;

@Column()
userName:string;


@Column( {default:false})
isAdmin:boolean;

}