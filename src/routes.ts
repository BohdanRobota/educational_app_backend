import { NamedRouter } from './common/types/tuples';
import { UserRouter } from './users/user/user.router';
import { StudentRouter } from './users/student/student.router';
import { TeacherRouter } from './users/teacher/teacher.router';
import { AdminRouter } from './users/admin/admin.router';
import { CourseRouter } from './course/course.router';
import { LessonRouter } from './lesson/lesson.router';

const routes: NamedRouter[] = [UserRouter, StudentRouter, TeacherRouter, AdminRouter, CourseRouter, LessonRouter];

export default routes;
