import { getCustomRepository } from "typeorm";
import { Request } from "express";
import { Teacher } from '../../db/entity';
import { TeacherRepository } from "./teacher.repository";
import client from "../../libs/redis";

export default class TeacherService {
  static async getTeacherById(id: number): Promise<Teacher> {
    const teacherRepository = getCustomRepository(TeacherRepository);
    const teacher = await teacherRepository.getTeacherById(id);
    return teacher as Teacher;
  }

  static async getTeachers(): Promise<Teacher[]> {
    const teacherRepository = getCustomRepository(TeacherRepository);
    const cashedTeachers = await client.get('teachers');
    if (cashedTeachers) {
      console.log('Get Teachers from Redis');
      return JSON.parse(cashedTeachers);
    } else {
      const teachers = await teacherRepository.getTeachers();
      client.set('teachers', JSON.stringify(teachers));
      return teachers;
    }
  }

  static async updateTeacher(req: Request) {
    const { id } = req.params;
    const teacherRepository = getCustomRepository(TeacherRepository);
    await teacherRepository.updateTeacher(Number(id), req.body);
  }

}