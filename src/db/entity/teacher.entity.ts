import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { User } from './user.entity';
import { Course } from './course.entity';

@Entity()
export class Teacher {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  grade: string;

  @OneToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Course)
  @JoinColumn()
  course: Course;
}