import { UserEntity } from "../models/user.entity";
import { UserDto } from "./UserDto";

export const toUserDto = (data: UserEntity): UserDto => {  
    const { id, username, email } = data;
    let userDto: UserDto = { id, username, email,  };
    return userDto;
};