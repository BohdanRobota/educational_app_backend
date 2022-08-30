import { Router } from 'express';
import { NamedRouter } from '../common/types/tuples';
import LessonController from './lesson.controller';
const router = Router();

router.get('/list', LessonController.getLessons);
router.get('/:id', LessonController.getLessonById);
router.post('/', LessonController.createLesson);
router.delete('/:id', LessonController.deleteLesson);
router.put('/:id', LessonController.updateLesson);

export const LessonRouter: NamedRouter = ['/lesson', router];