import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gamename: string;

  @Column()
  date: Date;

  @Column()
  title: string;

  @Column()
  content: string;
  
}
