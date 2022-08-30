import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from './user.entity';

@Entity()
export class Admin {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  permission: string;

  @OneToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn()
  user: User;

}