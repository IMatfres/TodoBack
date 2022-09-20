import { HTTP_STATUS } from '../../../../../application/shared/constants/http_codes';
import { BaseException } from '../../../../shared/domain/exceptions/base';

export class UserPasswordNotValid extends BaseException {

  constructor() {
    const message = `You have entered an invalid password`;
    super(HTTP_STATUS.NOT_FOUND, message);
  }

}
