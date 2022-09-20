import { TaskNotFound } from '../domain/exceptions/taskNotFound';
import { TaskId } from '../domain/valueObjects/taskid';
import { TaskRepository } from '../domain/repositories/taskRepository';

export class TaskDelator {

  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  public async run(id: TaskId): Promise<void> {
    const taskSearched = await this.taskRepository.searchOne(id);

    if (!taskSearched) {
      throw new TaskNotFound(id);
    }

    this.taskRepository.delete(taskSearched);
  }

}
