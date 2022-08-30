import { getCustomRepository, getRepository } from "typeorm";
import { Request } from "express";
import { User, Student, Teacher, Admin, Course } from '../../db/entity/';
import { UserRepository } from "./user.repository";
import client from "../../libs/redis";

export default class userService {

  static async getUsers(): Promise<User[]> {
    const userRepository = getCustomRepository(UserRepository);
    const cashedUsers = await client.get('users');
    if (cashedUsers) {
      console.log('Get Users from Redis');
      return JSON.parse(cashedUsers);
    } else {
      const users = await userRepository.getUsers();
      client.set('users', JSON.stringify(users));
      return users;
    }
  }

  static async getUserById(id: number): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.getUserById(id);
    return user as User;
  }

  static async updateUser(req: Request) {
    const { id } = req.params;
    const userRepository = getCustomRepository(UserRepository);
    await userRepository.updateUser(Number(id), req.body);
  }


  static async deleteUser(id: number) {
    const userRepository = getCustomRepository(UserRepository);
    await userRepository.deleteUser(id);
  }

  static async createUser(req: Request): Promise<User> {
    const { firstName, lastName, gender, role } = req.body;
    const course = req.body?.course;
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.gender = gender;
    user.role = role;

    const userRepository = getCustomRepository(UserRepository);
    const newUser = await userRepository.createUser(user);

    switch (role) {
      case 'student':
        const { speciality } = req.body;
        const student = new Student();
        student.speciality = speciality;
        student.user = user;
        student.course = course;
        const studentRepository = getRepository(Student);
        await studentRepository.save(student);
        break;
      case 'admin':
        const { permission } = req.body;
        const admin = new Admin();
        admin.permission = permission;
        admin.user = user;
        const adminRepository = getRepository(Admin);
        await adminRepository.save(admin);
        break;
      case 'teacher':
        const { grade } = req.body;
        const teacher = new Teacher();
        teacher.grade = grade;
        teacher.user = user;
        teacher.course = course;
        const teacherRepository = getRepository(Teacher);
        await teacherRepository.save(teacher);
        break;
    }
    return newUser;
  }
}