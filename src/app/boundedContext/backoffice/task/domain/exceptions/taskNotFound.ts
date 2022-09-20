import { HTTP_STATUS } from '../../../../../application/shared/constants/http_codes';
import { BaseException } from '../../../../shared/domain/exceptions/base';
import { TaskId } from '../valueObjects/taskid';

export class TaskNotFound extends BaseException {

  constructor(id: TaskId) {
    const message = `task with id ${id.getValue()} does not exist`;
    super(HTTP_STATUS.NOT_FOUND, message);
  }

}
