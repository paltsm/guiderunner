import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['user','fgame'])
export default class FollowingGames{
	@PrimaryGeneratedColumn()
	id:number

	@Column()
	user:number

	@Column()
	fgame:number
}