import { EntityRepository, Repository, getConnection } from "typeorm";
import { User } from "../../db/entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  public createUser(user: User) {
    return this.save(user);
  }

  public updateUser(id: number, updatedUser: object) {
    return getConnection()
      .createQueryBuilder()
      .update(User)
      .set(updatedUser)
      .where('id = :id', { id })
      .execute();
  }

  public deleteUser(id: number) {
    return getConnection()
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id })
      .execute();
  }

  public getUsers() {
    return this.find();
  }

  public getUserById(id: number) {
    return this.findOne({ id });
  }
}