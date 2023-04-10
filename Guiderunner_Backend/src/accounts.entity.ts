import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}