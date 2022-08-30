import { getCustomRepository, getRepository } from "typeorm";
import { Request } from "express";
import { Course } from '../db/entity/';
import { CourseRepository } from "./course.repository";

export default class courseService {
  static async getCourses(): Promise<Course[]> {
    const courseRepository = getCustomRepository(CourseRepository);
    const courses = await courseRepository.getCourses();
    return courses;
  }

  static async getCourseById(id: number): Promise<Course> {
    const courseRepository = getCustomRepository(CourseRepository);
    const course = await courseRepository.getCourseById(id);
    return course as Course;
  }

  static async updateCourse(req: Request) {
    const { id } = req.params;
    const courseRepository = getCustomRepository(CourseRepository);
    await courseRepository.updateCourse(Number(id), req.body);
  }


  static async deleteCourse(id: number) {
    const courseRepository = getCustomRepository(CourseRepository);
    await courseRepository.deleteCourse(id);
  }

  static async createCourse(req: Request): Promise<Course> {
    const { courseName } = req.body;
    const course = new Course();
    course.courseName = courseName;
    const courseRepository = getCustomRepository(CourseRepository);
    const newCourse = await courseRepository.createCourse(course);
    return newCourse;
  }
}