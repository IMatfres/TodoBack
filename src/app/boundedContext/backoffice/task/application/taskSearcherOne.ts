import { TaskNotFound } from '../domain/exceptions/taskNotFound';
import { Task } from '../domain/valueObjects/task';
import { TaskId } from '../domain/valueObjects/taskid';
import { TaskRepository } from '../domain/repositories/taskRepository';

export class TaskSearcherOne {

  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  public async run(id: TaskId): Promise<Task> {
    const taskSearched = await this.taskRepository.searchOne(id);
    if (!taskSearched) {
      throw new TaskNotFound(id);
    }

    return taskSearched;
  }

}
