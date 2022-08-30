import { getCustomRepository } from "typeorm";
import { Request } from "express";
import { Student } from '../../db/entity';
import { StudentRepository } from "./student.repository";
import client from "../../libs/redis";

export default class StudentService {
  static async getStudentById(id: number): Promise<Student> {
    const studentRepository = getCustomRepository(StudentRepository);
    const student = await studentRepository.getStudentById(id);
    return student as Student;
  }

  static async getStudents(): Promise<Student[]> {
    const studentRepository = getCustomRepository(StudentRepository);
    const cashedStudents = await client.get('students');
    if (cashedStudents) {
      console.log('Get Students from Redis');
      return JSON.parse(cashedStudents);
    } else {
      const students = await studentRepository.getStudents();
      client.set('students', JSON.stringify(students));
      return students;
    }
  }

  static async updateStudent(req: Request) {
    const { id } = req.params;
    const studentRepository = getCustomRepository(StudentRepository);
    await studentRepository.updateStudent(Number(id), req.body);
  }

}