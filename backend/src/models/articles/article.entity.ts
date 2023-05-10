import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('articles')
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;

  @Column()
  content: string;

  @Column({ nullable: true })
  date: Date;

  @Column({ default: false })
  published: boolean;
}
