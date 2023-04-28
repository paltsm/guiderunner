import { Body, ConflictException, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Account } from "src/typeorm/entities/account.entity";
import { DataSource } from "typeorm";
import FollowingGames from "./followingGames.entity";
import FollowingGamesDto from "./followingGames.dto";
import Game from "src/typeorm/entities/game.entity";
import FollowingUsersDto from "./followingUsers.dto";
import FollowingUsers from "./followingUsers.entity";

@Controller('following')
export class FollowingController{
	constructor(private dataSource: DataSource){}

	// @Get('games')
	// async getgamess(@Body() page:number){
	// 	const pagesize
	// }

	@Get(':userid/games')
	async findFgames(@Param('userid') userid:number){
		const fgames=await this.dataSource.getRepository(FollowingGames).find({where:{user:userid}})
		const fgamelist=fgames.map((g)=>{
			return g.fgame
		})
		console.log(fgamelist)
		let Fgames=[]
		for(let i=0;i<fgamelist.length;i++){
			Fgames.push(await this.dataSource.getRepository(Game).find({where:{id:fgamelist[i]}}))
		}
		return Fgames
	}

	@Get(':userid/users')
	async findFusers(@Param('userid') userid:number){
		const fusers=await this.dataSource.getRepository(FollowingUsers).find({where:{user:userid}})
		const fuserlist=fusers.map((g)=>{
			return g.fuser
		})
		console.log(fuserlist)
		let Fusers=[]
		for(let i=0;i<fuserlist.length;i++){
			Fusers.push(await this.dataSource.getRepository(Account).find({where:{id:fuserlist[i]}}))
		}
		return Fusers
	}

	@Post('games')
	async postGames(@Body() followingGamesDto:FollowingGamesDto){
		const exists=await this.dataSource.getRepository(FollowingGames).find({where:{user:followingGamesDto.user,fgame:followingGamesDto.fgame}})
		if(exists.length>0){
			throw new ConflictException("already following game")
		}
		return this.dataSource.getRepository(FollowingGames).save(followingGamesDto) 
	}
	@Post('users')
	async postUsers(@Body() followingUsersDto:FollowingUsersDto){
		const exists=await this.dataSource.getRepository(FollowingUsers).find({where:{user:followingUsersDto.user,fuser:followingUsersDto.fuser}})
		if(exists.length>0){
			throw new ConflictException("already following user")
		}
		return this.dataSource.getRepository(FollowingUsers).save(followingUsersDto) 
	}

	
	
	@Delete('games/delete')
	async deleteFgameById(@Body() followingGamesDto:FollowingGamesDto){
		const game=await this.dataSource.getRepository(FollowingGames).find({where:{fgame:followingGamesDto.fgame,user:followingGamesDto.user}})
		await this.dataSource.getRepository(FollowingGames).delete(game[0])
	}
	@Delete('users/delete')
    async deleteFuserById(@Body() followingUsersDto:FollowingUsersDto){
		const game=await this.dataSource.getRepository(FollowingUsers).find({where:{fuser:followingUsersDto.fuser,user:followingUsersDto.user}})
        await this.dataSource.getRepository(FollowingUsers).delete(game[0])
    }
}