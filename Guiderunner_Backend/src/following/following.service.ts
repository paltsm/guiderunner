import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class FollowingService{
	constructor(private dataSource: DataSource){}
}