import { HTTP_STATUS } from '../../../../../application/shared/constants/http_codes';
import { BaseException } from '../../../../shared/domain/exceptions/base';

export class TaskIdNotvalid extends BaseException {

  constructor(id: string) {
    const message = `error task id ${id} is not a task id valid`;
    super(HTTP_STATUS.BAD_REQUEST, message);
  }

}
