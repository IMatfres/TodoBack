import { UserEntity } from './typeORM/user.entity';
import { UserModel } from '../../domain/models/user.model';
import { User } from '../../domain/valueObjects/user';
import { UserId } from '../../domain/valueObjects/userId';
import { UserName } from '../../domain/valueObjects/userName';
import { UserEmail } from '../../domain/valueObjects/userEmail';
import { UserPassword } from '../../domain/valueObjects/userPassword';
import { UserRepository } from '../../domain/repositories/userRepository';
import orm from '../../../../../../config/ormconfig'

export class UserRepositoryTypeORM implements UserRepository {

  public async searchOne(id: UserId): Promise<User | null> {
    const firstItem = 0;
    const data = await UserEntity.findOneBy({ id:id.getValue() })

    if (!data) {
      return null;
    }

    return this.getUsersByUsersModel(data)[firstItem];
  }

  public async searchByEmail(email: UserEmail): Promise<User | null> {
    const firstItem = 0;
    const data = await UserEntity.findOneBy({ email: email.getValue() })

    if (!data) {
      return null;
    }

    return this.getUsersByUsersModel(data)[firstItem];
  }

  public async search(): Promise<User[]> {
    const users = await UserEntity.find()
    return this.getUsersByUsersModel(...users)
  }

  public async save(user: User): Promise<void> {
    const userToCreate = new UserEntity()
    userToCreate.id = user.getValueId()
    userToCreate.email = user.getValueEmail()
    userToCreate.password = user.getValuePassword()
    userToCreate.username = user.getValueUserName()
    await userToCreate.save()
  }

  public async update(user: User): Promise<void> {
    const repository = orm.getRepository(UserEntity)
    await repository.update(user.getValueId(), {
      ...(user.getValueEmail() && {email: user.getValueEmail()}),
      ...(user.getValuePassword() && {password: user.getValuePassword()}),
      ...(user.getValueUserName() && {username: user.getValueUserName()}),
    })
  }

  public async delete(user: User): Promise<void> {
    await UserEntity.delete({id: user.getValueId()})
  }

  private getUsersByUsersModel(...userModel: UserModel[]): User[] {
    return userModel.map((userbd: UserModel) => new User(new UserId(userbd.id), new UserName(userbd.username), new UserEmail(userbd.email), new UserPassword(userbd.password)));
  }

}
