import { AggregateRoot } from '../../../../shared/domain/aggregate/aggregateRoot';
import { UserEmail } from './userEmail';
import { UserPassword } from './userPassword';
import { LoginModel } from '../models/login.model'


export class Loging extends AggregateRoot {
  private email: UserEmail;
  private password: UserPassword;


  constructor(email: UserEmail, password: UserPassword) {
    super();
    this.email = email
    this.password = password
  }

  public getEmail(): UserEmail {
    return this.email;
  }

  public getPassword(): UserPassword {
    return this.password;
  }

  public getValueEmail(): string {
    return this.email.getValue();
  }

  public getValuePassword(): string {
    return this.password.getValue();
  }

  public toModel(): LoginModel {
    return {
      email : this.getValueEmail(),
      password: this.getValuePassword()
    };
  }

}
