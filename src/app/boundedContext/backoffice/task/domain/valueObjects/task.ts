import { AggregateRoot } from '../../../../shared/domain/aggregate/aggregateRoot';
import { TaskModel } from '../models/task.model';
import { TaskId } from './taskid';
import { TaskTitulo } from './tasktitulo';
import { TaskCompletada } from './taskCompletada';
import { TaskDescripcion } from './taskDescripcion';
import { TaskEstado } from './taskEstado';
import { TaskUserId } from './taskUserId'


export class Task extends AggregateRoot {

  private id: TaskId
  private titulo: TaskTitulo
  private completada: TaskCompletada
  private descripcion: TaskDescripcion
  private estado: TaskEstado
  private userid: TaskUserId


  constructor(id: TaskId, titulo: TaskTitulo, completada: TaskCompletada, descripcion: TaskDescripcion, estado: TaskEstado, userid: TaskUserId) {
    super();
    this.id = id
    this.titulo = titulo
    this.completada = completada
    this.descripcion = descripcion
    this.estado = estado
    this.userid = userid
  }

  public getId(): TaskId {
    return this.id;
  }

  public getTitulo(): TaskTitulo {
    return this.titulo;
  }

  public getValueId(): string {
    return this.id.getValue();
  }

  public getValueTitulo(): string {
    return this.titulo.getValue();
  }

  public getValueCompletada(): boolean {
    return this.completada.getValue();
  }

  public getValueDescripcion(): string {
    return this.descripcion.getValue();
  }

  public getValueEestado(): string {
    return this.estado.getValue();
  }

  public getValueUserId(): string {
    return this.userid.getValue();
  }

  public toModel(): TaskModel {
    return {
      id: this.getValueId(),
      titulo: this.getValueTitulo(),
      completada: this.getValueCompletada(),
      descripcion: this.getValueDescripcion(),
      estado: this.getValueEestado(),
      userid: this.getValueUserId()
    };
  }

}
