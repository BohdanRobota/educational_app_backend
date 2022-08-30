import CourseService from './course.service';
import { Request, Response } from 'express';

export default class CourseController {

  static async getCourses(req: Request, res: Response) {
    try {
      const courses = await CourseService.getCourses();
      console.log('Get all Courses');
      res.json(courses);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async getCourseById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const course = await CourseService.getCourseById(Number(id));
      console.log('Get Course');
      res.json(course);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async deleteCourse(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await CourseService.deleteCourse(Number(id));
      console.log('Delete Course');
      res.json('Course successfully deleted');
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async updateCourse(req: Request, res: Response) {
    try {
      await CourseService.updateCourse(req);
      console.log('Update Course');
      res.json('Course successfully updated');
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async createCourse(req: Request, res: Response) {
    try {
      const newCourse = await CourseService.createCourse(req);
      console.log('Created new Course');
      res.json(newCourse);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}

