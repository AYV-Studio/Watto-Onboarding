import { Column,PrimaryColumn,CreateDateColumn,Entity,PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt';

@Entity('user')
export class UserEntity{
@PrimaryGeneratedColumn()
id:number;

@PrimaryColumn()
//@IsEmail()
email:string;

@Column()
password:string;

@Column()
username:string;


@Column( {default:false})
isAdmin:boolean;
@BeforeInsert()  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);  
}

}