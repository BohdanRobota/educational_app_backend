import { EntityRepository, Repository, getConnection } from "typeorm";
import { Course } from "../db/entity";

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {

  public createCourse(course: Course) {
    return this.save(course);
  }

  public updateCourse(id: number, updatedCourse: object) {
    return getConnection()
      .createQueryBuilder()
      .update(Course)
      .set(updatedCourse)
      .where('id = :id', { id })
      .execute();
  }

  public deleteCourse(id: number) {
    return getConnection()
      .createQueryBuilder()
      .delete()
      .from(Course)
      .where('id = :id', { id })
      .execute();
  }

  public getCourses() {
    return this.find();
  }

  public getCourseById(id: number) {
    return this.findOne({ id });
  }
}