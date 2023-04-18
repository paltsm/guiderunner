import { IsNotEmpty, IsString } from "class-validator";

export class UpdateNewsDto {
  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid gamename!' })
  gamename: string;

  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid title!' })
  title: string;
  
  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid content!' })  
  content: string;
  
  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid source!' })  
  source: string;
  
  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid date!' })  
  date: string;

}
