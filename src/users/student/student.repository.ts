import { EntityRepository, Repository, getConnection, getRepository } from "typeorm";
import { Student } from "../../db/entity";

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {

  public updateStudent(id: number, updatedStudent: object) {
    return getConnection()
      .createQueryBuilder()
      .update(Student)
      .set(updatedStudent)
      .where('id = :id', { id })
      .execute();
  }

  public getStudents() {
    return getRepository(Student)
      .createQueryBuilder('student')
      .leftJoinAndSelect('student.user', 'user')
      .leftJoinAndSelect('student.course', 'course')
      .getMany();
  }

  public getStudentById(id: number) {
    return getRepository(Student)
      .createQueryBuilder('student')
      .leftJoinAndSelect('student.user', 'user')
      .leftJoinAndSelect('student.course', 'course')
      .where('student.id = :id', { id })
      .getOne();
  }

}