import { getCustomRepository } from "typeorm";
import { Request } from "express";
import { Admin } from '../../db/entity';
import { AdminRepository } from "./admin.repository";
import client from "../../libs/redis";

export default class AdminService {
  static async getAdminById(id: number): Promise<Admin> {
    const adminRepository = getCustomRepository(AdminRepository);
    const admin = await adminRepository.getAdminById(id);
    return admin as Admin;
  }

  static async getAdmins(): Promise<Admin[]> {
    const adminRepository = getCustomRepository(AdminRepository);
    const cashedAdmins = await client.get('admins');
    if (cashedAdmins) {
      console.log('Get Admins from Redis');
      return JSON.parse(cashedAdmins);
    } else {
      const admins = await adminRepository.getAdmins();
      client.set('admins', JSON.stringify(admins));
      return admins;
    }
  }

  static async updateAdmin(req: Request) {
    const { id } = req.params;
    const adminRepository = getCustomRepository(AdminRepository);
    await adminRepository.updateAdmin(Number(id), req.body);
  }

}