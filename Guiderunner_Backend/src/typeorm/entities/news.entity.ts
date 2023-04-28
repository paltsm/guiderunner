import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'news'})
export default class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gamename: string;

  @Column()
  title: string;

  @Column({length:300})
  content: string;

  @Column()
  source: string;

  @Column()
  date: string;

 
}
