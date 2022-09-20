import { Task } from '../valueObjects/task';
import { TaskId } from '../valueObjects/taskid';
import { TaskTitulo } from '../valueObjects/tasktitulo';
import { TaskUserId } from '../valueObjects/taskUserId';
export interface TaskRepository {
    
    searchOne(id: TaskId): Promise<Task | null>;
    searchByTitle(task: Task): Promise<Task | null>;
    searchTaskOf(id: TaskUserId): Promise<Task[] | null>;
    save(task: Task): Promise<void>;
    update(task: Task): Promise<void>;
    delete(task: Task): Promise<void>;

}
