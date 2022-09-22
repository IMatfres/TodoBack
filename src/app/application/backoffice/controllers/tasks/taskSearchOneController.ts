import { Request, Response } from 'express';
import { TaskSearcherOne } from '../../../../boundedContext/backoffice/task/application/taskSearcherOne';
import { TaskId } from '../../../../boundedContext/backoffice/task/domain/valueObjects/taskid'
import { TaskRepositoryTypeORM } from '../../../../boundedContext/backoffice/task/infrastructure/persistence/taskRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';
export class TaskSearchOneController {

  private taskSearcherOne: TaskSearcherOne;
  private taskRepositoryImpl: TaskRepositoryTypeORM;

  constructor() {
    this.taskRepositoryImpl = new TaskRepositoryTypeORM();
    this.taskSearcherOne = new TaskSearcherOne(this.taskRepositoryImpl);
  }

  public async run(req: Request, res: Response): Promise<void> {
    const task = await this.taskSearcherOne.run(new TaskId(req.params.id));
    res.status(HTTP_STATUS.SUCCESS).send(task.toModel());
  }

}
