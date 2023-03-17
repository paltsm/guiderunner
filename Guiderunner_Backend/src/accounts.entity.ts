import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountname: string;

  @Column()
  password: string;

  @Column()
  email: string;
}