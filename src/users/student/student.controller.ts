import StudentService from './student.service';
import { Request, Response } from 'express';

export default class StudentController {

  static async getStudents(req: Request, res: Response) {
    try {
      const students = await StudentService.getStudents();
      console.log('Get all Students');
      res.json(students);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async getStudentById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const student = await StudentService.getStudentById(Number(id));
      console.log('Get Student');
      res.json(student);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async updateStudent(req: Request, res: Response) {
    try {
      await StudentService.updateStudent(req);
      console.log('Update Student');
      res.json('Student successfully updated');
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}

