import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Teacher } from './teacher.entity';
import { Course } from './course.entity';

@Entity()
export class Lesson {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  topic: string;

  @Column()
  type: string;

  @Column()
  date: Date;

  @ManyToOne(() => Course)
  @JoinColumn()
  course: Course;

  @ManyToOne(() => Teacher)
  @JoinColumn()
  teacher: Teacher;
}