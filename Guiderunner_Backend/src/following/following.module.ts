import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import FollowingGames from "./followingGames.entity";
import { FollowingController } from "./following.controller";
import { FollowingService } from "./following.service";
import { Account } from "src/typeorm/entities/account.entity";
import FollowingUsers from "./followingUsers.entity";

@Module({
	imports: [TypeOrmModule.forFeature([FollowingGames,FollowingUsers])],
    controllers: [FollowingController],
    providers: [FollowingService],
})
export class FollowingModule{}