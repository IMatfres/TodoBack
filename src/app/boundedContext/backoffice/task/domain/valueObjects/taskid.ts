import { Uuid } from '../../../../shared/domain/valueObjects/uuid';
import { TaskIdNotvalid } from '../exceptions/taskIdNotValid';

export class TaskId extends Uuid {

  constructor(id: string) {
    try {
      super(id);
    } catch (error) {
      throw new TaskIdNotvalid(id);
    }
  }

}
