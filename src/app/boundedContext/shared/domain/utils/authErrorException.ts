import { HTTP_STATUS } from '../../../../application/shared/constants/http_codes';
import { BaseException } from '../exceptions/base';

export class AuthErrorException extends BaseException {

  constructor() {
    const message = `you are not authorized to perform this operation`;
    super(HTTP_STATUS.BAD_REQUEST, message);
  }

}
