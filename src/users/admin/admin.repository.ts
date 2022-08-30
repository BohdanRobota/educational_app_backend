import { EntityRepository, Repository, getConnection, getRepository } from "typeorm";
import { Admin } from "../../db/entity";

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {

  public updateAdmin(id: number, updatedAdmin: object) {
    return getConnection()
      .createQueryBuilder()
      .update(Admin)
      .set(updatedAdmin)
      .where('id = :id', { id })
      .execute();
  }

  public getAdmins() {
    return getRepository(Admin)
      .createQueryBuilder('admin')
      .leftJoinAndSelect('admin.user', 'user')
      .getMany();
  }

  public getAdminById(id: number) {
    return getRepository(Admin)
      .createQueryBuilder('admin')
      .leftJoinAndSelect('admin.user', 'user')
      .where('admin.id = :id', { id })
      .getOne();
  }

}