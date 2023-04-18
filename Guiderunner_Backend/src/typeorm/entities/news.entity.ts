import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'news'})
export default class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gamename: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  source: string;

  @Column()
  date: string;

 
}
