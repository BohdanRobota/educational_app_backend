import { Router } from 'express';
import { NamedRouter } from '../../common/types/tuples';
import StudentController from './student.controller';
const router = Router();

router.get('/list', StudentController.getStudents);
router.get('/:id', StudentController.getStudentById);
router.put('/:id', StudentController.updateStudent)

export const StudentRouter: NamedRouter = ['/student', router];