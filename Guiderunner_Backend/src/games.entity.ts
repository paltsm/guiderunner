import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export default class Games {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gamename: string;

  @Column()
  release: number;

  @Column()
  catergory: string;

  @Column()
  platform: string;

  @Column()
  developer: string;

  @Column()
  description: string;

  @Column()
  image: string;
}
