import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['user','fuser'])
export default class FollowingUsers{
	@PrimaryGeneratedColumn()
	id:number

	@Column()
	user:number

	@Column()
	fuser:number
}