import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateRecordDto {
//   @IsNotEmpty({message:"Please do not leave this field empty!"})
//   @IsString({ message: 'Please enter a valid username!' })
  @IsOptional()
  username: string;
  
  @IsOptional()
//   @IsNotEmpty({message:"Please do not leave this field empty!"})
//   @IsString({ message: 'Please enter a valid gamename!' })
  gamename: string;
  
  @IsOptional()
//   @IsNotEmpty({message:"Please do not leave this field empty!"})
//   @IsString({ message: 'Please enter a valid time! Use this format "hour:minute:second"!' })
  time: string;
  
  @IsOptional()
//   @IsNotEmpty({message:"Please do not leave this field empty!"})
//   @IsString({ message: 'Please enter a valid platform!' })
  platform: string;
  
  @IsOptional()
//   @IsNotEmpty({message:"Please do not leave this field empty!"})
//   @IsString({ message: 'Please enter a valid defficulty!' })
  difficulty: string;
  
  @IsOptional()
//   @IsNotEmpty({message:"Please do not leave this field empty!"})
//   @IsString({ message: 'Please enter a valid link!' })
  youtubelink: string;

  @IsNotEmpty({message:"verify empty"})
  verif:boolean
}
