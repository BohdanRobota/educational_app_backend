import TeacherService from './teacher.service';
import { Request, Response } from 'express';

export default class TeacherController {

  static async getTeachers(req: Request, res: Response) {
    try {
      const teachers = await TeacherService.getTeachers();
      console.log('Get all Teachers');
      res.json(teachers);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async getTeacherById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const teacher = await TeacherService.getTeacherById(Number(id));
      console.log('Get Teacher');
      res.json(teacher);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async updateTeacher(req: Request, res: Response) {
    try {
      await TeacherService.updateTeacher(req);
      console.log('Update Teacher');
      res.json('Teacher successfully updated');
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}

