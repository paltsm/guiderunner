import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Games {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gamename: string;

  @Column()
  release: number;

  @Column()
  category: string;

  @Column()
  platform: string;

  @Column()
  developer: string;

  @Column()
  description: string;

  @Column()
  image: string;
}