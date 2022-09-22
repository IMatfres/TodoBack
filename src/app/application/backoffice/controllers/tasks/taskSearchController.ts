import { Request, Response } from 'express';
import { TaskSearcher } from '../../../../boundedContext/backoffice/task/application/taskSearcher';
import { Task } from '../../../../boundedContext/backoffice/task/domain/valueObjects/task';
import { TaskUserId } from '../../../../boundedContext/backoffice/task/domain/valueObjects/taskUserId'
import { TaskRepositoryTypeORM } from '../../../../boundedContext/backoffice/task/infrastructure/persistence/taskRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';
export class TaskSearchController {

  private taskSearcher: TaskSearcher;
  private taskRepositoryImpl: TaskRepositoryTypeORM;

  constructor() {
    this.taskRepositoryImpl = new TaskRepositoryTypeORM();
    this.taskSearcher = new TaskSearcher(this.taskRepositoryImpl);
  }

  public async run(req: Request, res: Response): Promise<void> {
    const tasks = await this.taskSearcher.run(new TaskUserId(req.userlogueado));
    const tasksResponse = tasks.map((task: Task) => task.toModel());
    res.status(HTTP_STATUS.SUCCESS).send(tasksResponse);
  }

}
