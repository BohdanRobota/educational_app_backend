import { getCustomRepository, getRepository } from "typeorm";
import { Request } from "express";
import { Lesson } from '../db/entity/';
import { LessonRepository } from "./lesson.repository";

export default class lessonService {
  static async getLessons(): Promise<Lesson[]> {
    const lessonRepository = getCustomRepository(LessonRepository);
    const lessons = await lessonRepository.getLessons();
    return lessons;
  }

  static async getLessonById(id: number): Promise<Lesson> {
    const lessonRepository = getCustomRepository(LessonRepository);
    const lesson = await lessonRepository.getLessonById(id);
    return lesson as Lesson;
  }

  static async updateLesson(req: Request) {
    const { id } = req.params;
    const lessonRepository = getCustomRepository(LessonRepository);
    await lessonRepository.updateLesson(Number(id), req.body);
  }


  static async deleteLesson(id: number) {
    const lessonRepository = getCustomRepository(LessonRepository);
    await lessonRepository.deleteLesson(id);
  }

  static async createLesson(req: Request): Promise<Lesson> {
    const { topic, type, date, course, teacher } = req.body;
    const lesson = new Lesson();
    lesson.topic = topic;
    lesson.type = type;
    lesson.date = date;
    lesson.course = course;
    lesson.teacher = teacher;

    const lessonRepository = getCustomRepository(LessonRepository);
    const newLesson = await lessonRepository.createLesson(lesson);

    return newLesson;
  }
}