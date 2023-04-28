import { IsNotEmpty } from "class-validator";

export default class FollowingGamesDto{


	@IsNotEmpty()
	user:number
	
	@IsNotEmpty()
	fgame:number
}