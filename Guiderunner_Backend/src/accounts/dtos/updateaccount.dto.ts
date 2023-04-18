import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MaxLength, 
    MinLength,
  } from 'class-validator';


export class UpdateAccountDto{
    @IsNotEmpty({message:"Please do not leave this field empty!"})
    @IsString({ message: 'Please enter a valid username!' })
    @MinLength(3, { message: 'The username cannot be less than 3 characters!' })
    @MaxLength(20, { message: 'The username cannot be more than 20 characters!' })
    username: string;
  
    @IsNotEmpty({message:"Please do not leave this field empty!"})
    @IsString({ message: 'Please enter a valid email!' })
    @IsEmail()
    email: string;
  
    @IsNotEmpty({message:"Please do not leave this field empty!"})
    @IsString({ message: 'Please enter a valid password!' })
    @MinLength(8, { message: 'The username cannot be less than 8 characters!' })
    @MaxLength(64, { message: 'The username cannot be more than 64 characters!' })
    password: string;
  
}