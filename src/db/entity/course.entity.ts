import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Course {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseName: string;
}