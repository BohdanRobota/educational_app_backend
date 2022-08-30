import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // age: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: string;

  @Column()
  role: string;
}