import { IsString, IsUrl,IsInt } from "class-validator";

export default class newGamesDto {

  @IsString({ message: 'név rossz' })
  gamename: string;
  
  @IsInt({message:"nem szam"}) 
  release: number;
  
  @IsString({ message: 'kategória rossz' })
  category: string;
  
  @IsString({ message: 'platform rossz' })
  platform: string;
  
  @IsString({ message: 'developer rossz' })
  developer: string;
  
  @IsString({ message: 'description rossz' })
  description: string;
  
  @IsUrl()
  image: string;
}