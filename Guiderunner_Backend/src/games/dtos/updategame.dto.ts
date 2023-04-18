import { IsString, IsUrl,IsInt, IsNotEmpty } from "class-validator";

export class UpdateGameDto {

  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid gamename!' })
  gamename: string;
  
  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid release date!' }) 
  release: number;
  
  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid genre!' })
  genre: string;
  
  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid platform!' })
  platform: string;
  
  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid developer!' })
  developer: string;
  
  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid description!' })
  description: string;
  

  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsUrl()
  image: string;
}