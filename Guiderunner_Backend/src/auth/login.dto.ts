import { IsNotEmpty, IsString } from "class-validator";


export default class LoginDto{
    @IsNotEmpty({message:"Please do not leave this field empty!"})
    @IsString({message: "Please enter a valid email!" })
    email: string;
    
    @IsNotEmpty({message:"Please do not leave this field empty!"})
    @IsString({ message: 'Please enter a valid password!' })
    password: string;
}