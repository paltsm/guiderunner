import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Records {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountname: string;

  @Column()
  gamename: string;

  @Column()
  time: string;

  @Column()
  platform: string;

  @Column()
  difficulty: string;

  @Column()
  youtubelink: string;
}
