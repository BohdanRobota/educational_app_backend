import LessonService from './lesson.service';
import { Request, Response } from 'express';

export default class LessonController {

  static async getLessons(req: Request, res: Response) {
    try {
      const lessons = await LessonService.getLessons();
      console.log('Get all Lessons');
      res.json(lessons);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async getLessonById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const lesson = await LessonService.getLessonById(Number(id));
      console.log('Get Lesson');
      res.json(lesson);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async deleteLesson(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await LessonService.deleteLesson(Number(id));
      console.log('Delete Lesson');
      res.json('Lesson successfully deleted');
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async updateLesson(req: Request, res: Response) {
    try {
      await LessonService.updateLesson(req);
      console.log('Update Lesson');
      res.json('Lesson successfully updated');
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async createLesson(req: Request, res: Response) {
    try {
      const newLesson = await LessonService.createLesson(req);
      console.log('Created new Lesson');
      res.json(newLesson);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}

