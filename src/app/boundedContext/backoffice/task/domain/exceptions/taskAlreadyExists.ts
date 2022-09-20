import { HTTP_STATUS } from '../../../../../application/shared/constants/http_codes';
import { BaseException } from '../../../../shared/domain/exceptions/base';
import { Task } from '../valueObjects/task';

export class TaskAlreadyExists extends BaseException {

  constructor(task: Task) {
    const message = `task with title ${task.getTitulo()} already exists`;
    super(HTTP_STATUS.CONFLICT, message);
  }

}
