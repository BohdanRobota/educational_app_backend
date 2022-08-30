import AdminService from './admin.service';
import { Request, Response } from 'express';

export default class AdminController {

  static async getAdmins(req: Request, res: Response) {
    try {
      const admins = await AdminService.getAdmins();
      console.log('Get all Admins');
      res.json(admins);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async getAdminById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const admin = await AdminService.getAdminById(Number(id));
      console.log('Get Admin');
      res.json(admin);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async updateAdmin(req: Request, res: Response) {
    try {
      await AdminService.updateAdmin(req);
      console.log('Update Admin');
      res.json('Admin successfully updated');
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}
