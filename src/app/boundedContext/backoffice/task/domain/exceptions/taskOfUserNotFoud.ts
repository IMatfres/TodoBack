import { HTTP_STATUS } from '../../../../../application/shared/constants/http_codes';
import { BaseException } from '../../../../shared/domain/exceptions/base';
import { TaskUserId } from '../valueObjects/taskUserId';

export class TaskOfUserNotFound extends BaseException {

  constructor(id: TaskUserId) {
    const message = `task of user with id ${id.getValue()} does not exist`;
    super(HTTP_STATUS.NOT_FOUND, message);
  }

}
