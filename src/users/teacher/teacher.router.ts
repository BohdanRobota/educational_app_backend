import { Router } from 'express';
import { NamedRouter } from '../../common/types/tuples';
import TeacherController from './teacher.controller';
const router = Router();

router.get('/list', TeacherController.getTeachers);
router.get('/:id', TeacherController.getTeacherById);
router.put('/:id', TeacherController.updateTeacher)

export const TeacherRouter: NamedRouter = ['/teacher', router];