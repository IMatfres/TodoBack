import { Request, Response } from 'express';
import { LogCreator } from '../../../../boundedContext/backoffice/auth/application/userLogger'
import { Loging } from '../../../../boundedContext/backoffice/auth/domain/valueObjects/log'
import { authRepository } from '../../../../boundedContext/backoffice/auth/infrastructure/authRepository'
import { HTTP_STATUS } from '../../../shared/constants/http_codes';
import { UserEmail } from '../../../../boundedContext/backoffice/users/domain/valueObjects/userEmail';
import { UserPassword } from '../../../../boundedContext/backoffice/users/domain/valueObjects/userPassword';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

export class UserLogController {
  private authRepo: authRepository
  private logcreator: LogCreator

  constructor() {
    this.authRepo = new authRepository()
    this.logcreator = new LogCreator(this.authRepo)
  }

  public async run(req: Request, res: Response): Promise<void> {
    const login = new Loging(
      new UserEmail(req.body.email),
      new UserPassword(req.body.password)
    )
    const user = await this.logcreator.run(login)
    const token = jwt.sign({ id: user.getValueId() }, process.env.JWT_PASS!, {expiresIn: '1h'})
    const data = { id: user.getValueId(), username: user.getValueUserName(), email: user.getValueEmail()}
    res.status(HTTP_STATUS.SUCCESS).send({
      user: data,
      token: token
    });
  }

}
