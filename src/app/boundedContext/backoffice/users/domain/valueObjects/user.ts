import { AggregateRoot } from '../../../../shared/domain/aggregate/aggregateRoot';
import { UserModel } from '../models/user.model';
import { UserId } from './userId';
import { UserName } from './userName';
import { UserEmail } from './userEmail';
import { UserPassword } from './userPassword';


export class User extends AggregateRoot {

  private id: UserId;
  private email: UserEmail;
  private password: UserPassword;
  private username: UserName;


  constructor(id: UserId, name: UserName, email: UserEmail, password: UserPassword) {
    super();
    this.id = id;
    this.username = name;
    this.email = email
    this.password = password
  }

  public getId(): UserId {
    return this.id;
  }

  public getName(): UserName {
    return this.username;
  }

  public getEmail(): UserEmail {
    return this.email;
  }

  public getValueId(): string {
    return this.id.getValue();
  }

  public getValueUserName(): string {
    return this.username.getValue();
  }

  public getValueEmail(): string {
    return this.email.getValue();
  }

  public getValuePassword(): string {
    return this.password.getValue();
  }

  public toModel(): UserModel {
    return {
      id: this.getValueId(),
      username: this.getValueUserName(),
      email : this.getValueEmail(),
      password: this.getValuePassword()
    };
  }

}
