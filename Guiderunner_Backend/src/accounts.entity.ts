import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

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
