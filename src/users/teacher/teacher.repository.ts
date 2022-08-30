import { EntityRepository, Repository, getConnection, getRepository } from "typeorm";
import { Teacher } from "../../db/entity";

@EntityRepository(Teacher)
export class TeacherRepository extends Repository<Teacher> {

  public updateTeacher(id: number, updatedTeacher: object) {
    return getConnection()
      .createQueryBuilder()
      .update(Teacher)
      .set(updatedTeacher)
      .where('id = :id', { id })
      .execute();
  }

  public getTeachers() {
    return getRepository(Teacher)
      .createQueryBuilder('teacher')
      .leftJoinAndSelect('teacher.user', 'user')
      .leftJoinAndSelect('teacher.course', 'course')
      .getMany();
  }

  public getTeacherById(id: number) {
    return getRepository(Teacher)
      .createQueryBuilder('teacher')
      .leftJoinAndSelect('teacher.user', 'user')
      .leftJoinAndSelect('teacher.course', 'course')
      .where('teacher.id = :id', { id })
      .getOne();
  }

}