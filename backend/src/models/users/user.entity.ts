import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  username: string;

  @Column('text')
  password: string;

  @Column({ nullable: true })
  email: string;

  @Column({ default: false })
  admin: boolean;
}
