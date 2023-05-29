import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('articles')
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;

  @Column('text')
  content: string;

  @Column({ nullable: true })
  date: Date;

  @Column({ nullable: true })
  image: string;

  @Column({ default: false })
  published: boolean;
}
