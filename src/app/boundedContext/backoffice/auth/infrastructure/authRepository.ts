import { User } from "../../users/domain/valueObjects/user";
import { UserModel } from '../../users/domain/models/user.model';
import { LoginRepository } from "../domain/repositories/logRepository";
import { UserEmail } from "../domain/valueObjects/userEmail";
import { UserEntity } from '../../../../boundedContext/backoffice/users/infrastructure/persistence/typeORM/user.entity'
import { UserId } from '../../users/domain/valueObjects/userId';
import { UserName } from '../../users/domain/valueObjects/userName';
import { UserPassword } from '../domain/valueObjects/userPassword';

export class authRepository implements LoginRepository {
    public async searchByEmail(email: UserEmail): Promise<User | null> {
        const firstItem = 0;
        const data = await UserEntity.findOneBy({ email: email.getValue() })

        if (!data) {
            return null;
        }

        return this.getUsersByUsersModel(data)[firstItem];
    }

    private getUsersByUsersModel(...userModel: UserModel[]): User[] {
        return userModel.map((userbd: UserModel) => new User(new UserId(userbd.id), new UserName(userbd.username), new UserEmail(userbd.email), new UserPassword(userbd.password)));
    }

}