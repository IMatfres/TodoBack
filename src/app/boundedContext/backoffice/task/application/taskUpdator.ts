import { TaskNotFound } from '../domain/exceptions/taskNotFound';
import { Task } from '../domain/valueObjects/task';
import { TaskRepository } from '../domain/repositories/taskRepository';

export class TaskUpdator {

  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  public async run(task: Task): Promise<void> {
    const taskSearched = await this.taskRepository.searchOne(task.getId());

    if (!taskSearched) {
      throw new TaskNotFound(task.getId());
    }

    this.taskRepository.update(task);
  }

}
