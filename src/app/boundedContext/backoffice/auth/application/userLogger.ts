import { UserNotFound } from '../domain/exceptions/userNotFound'
import { UserPasswordNotValid } from '../domain/exceptions/userPasswordNotValid'
import { LoginRepository } from '../domain/repositories/logRepository'
import { Loging } from '../domain/valueObjects/log'
import { User } from '../../../../boundedContext/backoffice/users/domain/valueObjects/user'
import bcrypt from 'bcrypt';
export class LogCreator {

    private logRepository: LoginRepository;
  
    constructor(logRepository: LoginRepository) {
      this.logRepository = logRepository;
    }
  
    public async run(log: Loging): Promise<User> {
      const userSearched = await this.logRepository.searchByEmail(log.getEmail());
      
      if (!userSearched) {
        throw new UserNotFound(log.getEmail());
      }

      const validatePass = await bcrypt.compare(log.getValuePassword(), userSearched.getValuePassword())
      if (!validatePass){
        throw new UserPasswordNotValid()
      }

      return userSearched
    }
  
  }
  