import {Cliente} from './cliente';
import {Empleado} from './empleado';

export class Evento {
  id: number;
  cliente: Cliente;
  empleado: Empleado;
  titulo: string;
  description: string;
  clasificacion: string;
  fecha: string;

  constructor(
    id: number,
    cliente: Cliente,
    empleado: Empleado,
    titulo: string,
    description: string,
    clasificacion: string,
    fecha: string
  ) {
    this.id = id;
    this.cliente = cliente;
    this.empleado = empleado;
    this.titulo = titulo;
    this.description = description;
    this.clasificacion = clasificacion;
    this.fecha = fecha;
  }
}
