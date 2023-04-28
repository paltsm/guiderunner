import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum authority {
	admin = 'admin',
	user = 'user',
  }

@Entity({ name: 'accounts' })
export class Account{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

	@Column({ type: 'enum', enum: authority, default: authority.user })
	role:authority;
}