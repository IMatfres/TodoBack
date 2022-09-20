import { HTTP_STATUS } from '../../../../application/shared/constants/http_codes';
import { BaseException } from '../exceptions/base';

export class TokenErrorException extends BaseException {

  constructor() {
    const message = `Your session has expired. Please relogin`;
    super(HTTP_STATUS.BAD_REQUEST, message);
  }

}
