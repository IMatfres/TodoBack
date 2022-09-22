import { TaskEntity } from '../../../users/infrastructure/persistence/typeORM/task.entity';
import { TaskModel } from '../../domain/models/task.model';
import { Task } from '../../domain/valueObjects/task';
import { TaskCompletada, TaskEstado, TaskDescripcion, TaskId, TaskUserId, TaskTitulo} from '../../domain/valueObjects/index'
import { TaskRepository } from '../../domain/repositories/taskRepository';
import orm from '../../../../../../config/ormconfig'

export class TaskRepositoryTypeORM implements TaskRepository {

  public async searchOne(id: TaskId): Promise<Task | null> {
    const firstItem = 0;
    const data = await TaskEntity.findOneBy({ id:id.getValue() })

    if (!data) {
      return null;
    }

    return this.getUsersByTaskModel(data)[firstItem];
  }

  public async searchByTitle(task: Task): Promise<Task | null> {
    const firstItem = 0;
    const data = await TaskEntity.findOne({
      where: {
        userid: task.getValueUserId(),
        titulo: task.getValueTitulo()
      }
    })

    if (!data) {
      return null;
    }

    return this.getUsersByTaskModel(data)[firstItem];
  }

  public async searchTaskOf(id: TaskUserId): Promise<Task[] | null> {
    const tasks = await TaskEntity.find({
      where: {
        userid: id.getValue()
      }
    })
    if (!tasks) {
      return null;
    }
    return this.getUsersByTaskModel(...tasks)
  }

  public async save(task: Task): Promise<void> {
    const taskToCreate = new TaskEntity()
    taskToCreate.id = task.getValueId()
    taskToCreate.titulo = task.getValueTitulo()
    taskToCreate.completada = task.getValueCompletada()
    taskToCreate.descripcion = task.getValueDescripcion()
    taskToCreate.estado = task.getValueEestado()
    taskToCreate.userid = task.getValueUserId()
    await taskToCreate.save()
  }

  public async update(task: Task): Promise<void> {
    const repository = orm.getRepository(TaskEntity)
    await repository.update(task.getValueId(), {
      ...(task.getValueTitulo() && {titulo: task.getValueTitulo()}),
      ...(task.getValueCompletada() && {completada: task.getValueCompletada()}),
      ...(task.getValueDescripcion() && {descripcion: task.getValueDescripcion()}),
      ...(task.getValueEestado() && {estado: task.getValueEestado()}),
      ...(task.getValueUserId() && {userid: task.getValueUserId()}),
    })
  }

  public async delete(task: Task): Promise<void> {
    await TaskEntity.delete({id: task.getValueId()})
  }

  private getUsersByTaskModel(...taskModel: TaskModel[]): Task[] {
    return taskModel.map((taskbd: TaskModel) => new Task(new TaskId(taskbd.id), new TaskTitulo(taskbd.titulo), new TaskCompletada(taskbd.completada), new TaskDescripcion(taskbd.descripcion), new TaskEstado(taskbd.estado), new TaskUserId(taskbd.userid)));
  }

}
