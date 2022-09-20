import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryColumn()
    id!: string

  @Column()
    email!: string

  @Column()
    password!: string

  @Column()
    username!: string
}
