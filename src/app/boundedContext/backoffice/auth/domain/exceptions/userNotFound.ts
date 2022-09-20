import { HTTP_STATUS } from '../../../../../application/shared/constants/http_codes';
import { BaseException } from '../../../../shared/domain/exceptions/base';
import { UserEmail } from '../valueObjects/userEmail';

export class UserNotFound extends BaseException {

  constructor(email: UserEmail) {
    const message = `error user with email ${email} does not exist`;
    super(HTTP_STATUS.NOT_FOUND, message);
  }

}
