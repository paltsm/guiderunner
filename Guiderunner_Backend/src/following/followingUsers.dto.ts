import { IsNotEmpty } from "class-validator";

export default class FollowingUsersDto{


	@IsNotEmpty()
	user:number
	
	@IsNotEmpty()
	fuser:number
}