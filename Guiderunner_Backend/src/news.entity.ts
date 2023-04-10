import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gamename: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()//oldal forrás
  source: string;

  @Column()
  date: Date;

 
}

