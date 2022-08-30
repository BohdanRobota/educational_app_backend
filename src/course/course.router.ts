import { Router } from 'express';
import { NamedRouter } from '../common/types/tuples';
import CourseController from './course.controller';
const router = Router();

router.get('/list', CourseController.getCourses);
router.get('/:id', CourseController.getCourseById);
router.post('/', CourseController.createCourse);
router.delete('/:id', CourseController.deleteCourse);
router.put('/:id', CourseController.updateCourse);

export const CourseRouter: NamedRouter = ['/course', router];