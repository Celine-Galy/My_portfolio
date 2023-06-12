import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';

@Entity('articles')
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  title: string;

  @Column('text')
  content: string;

  @Column({ nullable: true })
  date: Date;

  @Column({ nullable: true })
  image: string;

  @Column({ default: false })
  published: boolean;

  @ManyToOne(() => Category, (category) => category.articles)
  category: Category;
}
