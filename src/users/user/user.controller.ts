import UserService from './user.service';
import { Request, Response } from 'express';

export default class UserController {

  static async getUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getUsers();
      console.log('Get all Users');
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(Number(id));
      console.log('Get User');
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedUser = await UserService.deleteUser(Number(id));
      console.log('Delete User');
      res.json('User successfully deleted');
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      await UserService.updateUser(req);
      console.log('Update User');
      res.json('User successfully updated');
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const newUser = await UserService.createUser(req);
      console.log('Created new User');
      res.json(newUser);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}

