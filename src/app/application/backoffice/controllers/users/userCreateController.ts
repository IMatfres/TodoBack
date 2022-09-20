import { Request, Response } from 'express';
import { UserCreator } from '../../../../boundedContext/backoffice/users/application/userCreator';
import { User } from '../../../../boundedContext/backoffice/users/domain/valueObjects/user';
import { UserId } from '../../../../boundedContext/backoffice/users/domain/valueObjects/userId';
import { UserName } from '../../../../boundedContext/backoffice/users/domain/valueObjects/userName';
import { UserEmail } from '../../../../boundedContext/backoffice/users/domain/valueObjects/userEmail';
import { UserPassword } from '../../../../boundedContext/backoffice/users/domain/valueObjects/userPassword';
import { UserRepositoryTypeORM } from '../../../../boundedContext/backoffice/users/infrastructure/persistence/userRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';
import { UuidV4Generator } from '../../../../boundedContext/shared/domain/valueObjects/UuidV4Generator'
import  bcrypt from 'bcrypt'

export class UserCreateController {

  private userCreator: UserCreator;
  private userRepositoryImpl: UserRepositoryTypeORM;
  private idGenerator: UuidV4Generator

  constructor() {
    this.userRepositoryImpl = new UserRepositoryTypeORM();
    this.userCreator = new UserCreator(this.userRepositoryImpl);
    this.idGenerator = new UuidV4Generator()
  }

  public async run(req: Request, res: Response): Promise<void> {
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    const user = new User(
      new UserId(this.idGenerator.generate()), 
      new UserName(req.body.username), 
      new UserEmail(req.body.email),
      new UserPassword(hashPassword) 
    );
    await this.userCreator.run(user);
    res.status(HTTP_STATUS.CREATED).send();
  }

}
