import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm'
@Entity('tasks')
export class TaskEntity extends BaseEntity {
  @PrimaryColumn()
    id!: string

  @Column()
    titulo!: string

  @Column({ default: false })
    completada!: boolean

  @Column()
    descripcion!: string

  @Column()
    estado!: string

  @Column()
    userid!: string
}
