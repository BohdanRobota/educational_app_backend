import { EntityRepository, getRepository, Repository, getConnection } from "typeorm";
import { Lesson } from "../db/entity";

@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson> {

  public createLesson(lesson: Lesson) {
    return this.save(lesson);
  }

  public updateLesson(id: number, updatedLesson: object) {
    return getConnection()
      .createQueryBuilder()
      .update(Lesson)
      .set(updatedLesson)
      .where('id = :id', { id })
      .execute();
  }

  public deleteLesson(id: number) {
    return getConnection()
      .createQueryBuilder()
      .delete()
      .from(Lesson)
      .where('id = :id', { id })
      .execute();
  }

  public getLessons() {
    return getRepository(Lesson)
      .createQueryBuilder('lesson')
      .leftJoinAndSelect('lesson.course', 'course')
      .leftJoinAndSelect('lesson.teacher', 'teacher')
      .getMany();
  }

  public getLessonById(id: number) {
    return getRepository(Lesson)
      .createQueryBuilder('lesson')
      .leftJoinAndSelect('lesson.teacher', 'teacher')
      .leftJoinAndSelect('lesson.course', 'course')
      .where('lesson.id = :id', { id })
      .getOne();
  }
}