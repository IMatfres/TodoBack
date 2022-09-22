import { Request, Response } from 'express';
import { TaskCreator } from '../../../../boundedContext/backoffice/task/application/taskCreator';
import { Task } from '../../../../boundedContext/backoffice/task/domain/valueObjects/task';
import { TaskRepositoryTypeORM } from '../../../../boundedContext/backoffice/task/infrastructure/persistence/taskRepositoryTypeORM';
import { HTTP_STATUS } from '../../../shared/constants/http_codes';
import { TaskId, TaskTitulo, TaskCompletada, TaskDescripcion, TaskEstado, TaskUserId } from '../../../../boundedContext/backoffice/task/domain/valueObjects/index'
import { UuidV4Generator } from '../../../../boundedContext/shared/domain/valueObjects/UuidV4Generator'

export class TaskCreateController {

  private taskCreator: TaskCreator;
  private taskRepositoryImpl: TaskRepositoryTypeORM;
  private idGenerator: UuidV4Generator
  
  constructor() {
    this.taskRepositoryImpl = new TaskRepositoryTypeORM();
    this.taskCreator = new TaskCreator(this.taskRepositoryImpl);
    this.idGenerator = new UuidV4Generator()
  }

  public async run(req: Request, res: Response): Promise<void> {
    const task = new Task(
      new TaskId(this.idGenerator.generate()),
      new TaskTitulo(req.body.titulo),
      new TaskCompletada(false),
      new TaskDescripcion(req.body.descripcion),
      new TaskEstado(req.body.estado),
      new TaskUserId(req.userlogueado)

    )
    await this.taskCreator.run(task);
    res.status(HTTP_STATUS.CREATED).send();
  }

}
