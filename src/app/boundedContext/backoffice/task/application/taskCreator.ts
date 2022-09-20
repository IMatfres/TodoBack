import { TaskAlreadyExists } from '../domain/exceptions/taskAlreadyExists';
import { Task } from '../domain/valueObjects/task';
import { TaskRepository } from '../domain/repositories/taskRepository';

export class TaskCreator {

  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  public async run(task: Task): Promise<void> {
    const taskSearched = await this.taskRepository.searchByTitle(task);
    
    if (taskSearched) {
      throw new TaskAlreadyExists(task);
    }

    await this.taskRepository.save(task);
  }

}
