import { Request, Response } from 'express';
import { TaskDelator } from '../../../../boundedContext/backoffice/task/application/taskDelator';
import { TaskId } from '../../../../boundedContext/backoffice/task/domain/valueObjects/taskid';
import { TaskRepositoryTypeORM } from '../../../../boundedContext/backoffice/task/infrastructure/persistence/taskRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';

export class TaskDeleteController {

  private taskDelator: TaskDelator;
  private taskRepositoryImpl: TaskRepositoryTypeORM;

  constructor() {
    this.taskRepositoryImpl = new TaskRepositoryTypeORM();
    this.taskDelator = new TaskDelator(this.taskRepositoryImpl);
  }

  public async run(req: Request, res: Response): Promise<void> {
    await this.taskDelator.run(new TaskId(req.params.id));
    res.status(HTTP_STATUS.SUCCESS).send();
  }

}
