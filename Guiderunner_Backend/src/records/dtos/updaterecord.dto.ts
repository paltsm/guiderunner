import { IsNotEmpty, IsString } from "class-validator";

export class UpdateRecordDto {
  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid username!' })
  username: string;

  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid gamename!' })
  gamename: string;

  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid time! Use this format "hour:minute:second"!' })
  time: string;

  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid platform!' })
  platform: string;

  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid defficulty!' })
  difficulty: string;

  @IsNotEmpty({message:"Please do not leave this field empty!"})
  @IsString({ message: 'Please enter a valid link!' })
  youtubelink: string;
}
