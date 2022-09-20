import { Task } from '../domain/valueObjects/task';
import { TaskRepository } from '../domain/repositories/taskRepository';
import { TaskUserId } from '../domain/valueObjects/taskUserId';
import { TaskOfUserNotFound } from '../domain/exceptions/taskOfUserNotFoud'

export class TaskSearcher {

  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  public async run(id: TaskUserId): Promise<Task[]> {
    const tasks = await this.taskRepository.searchTaskOf(id);
    if (!tasks){
      throw new TaskOfUserNotFound(id)
    }
    return tasks
  }

}
