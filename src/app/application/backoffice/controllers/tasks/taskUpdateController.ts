import { Request, Response } from 'express';
import { TaskUpdator } from '../../../../boundedContext/backoffice/task/application/taskUpdator';
import { Task } from '../../../../boundedContext/backoffice/task/domain/valueObjects/task';
import { TaskRepositoryTypeORM } from '../../../../boundedContext/backoffice/task/infrastructure/persistence/taskRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';
import { TaskId, TaskTitulo, TaskCompletada, TaskDescripcion, TaskEstado, TaskUserId } from '../../../../boundedContext/backoffice/task/domain/valueObjects/index'

export class TaskUpdateController {

  private taskUpdator: TaskUpdator;
  private taskRepositoryImpl: TaskRepositoryTypeORM;
  
  constructor() {
    this.taskRepositoryImpl = new TaskRepositoryTypeORM();
    this.taskUpdator = new TaskUpdator(this.taskRepositoryImpl);

  }

  public async run(req: Request, res: Response): Promise<void> {
    const task = new Task(
      new TaskId(req.params.id),
      new TaskTitulo(req.body.titulo),
      new TaskCompletada(req.body.completada),
      new TaskDescripcion(req.body.descripcion),
      new TaskEstado(req.body.estado),
      new TaskUserId(req.userlogueado)
      
    )
    await this.taskUpdator.run(task);
    res.status(HTTP_STATUS.SUCCESS).send();
  }

}
