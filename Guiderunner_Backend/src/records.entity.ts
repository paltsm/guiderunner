import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export default class Records {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  game: string;

  @Column()
  time: string;

  @Column()
  platform: string;

  @Column()
  difficulty: string;

  @Column()
  youtubelink: string;
}
