import { Cliente } from "./cliente";

export class Evento {
  id: number;
  cliente: Cliente;
  titulo: string;
  description: string;
  clasificacion: string;
  fecha: string;

  constructor(id:number,  cliente: Cliente, titulo: string, description: string, clasificacion: string) {
    this.id = id;
    this.cliente = cliente;
    this.titulo = titulo;
    this.description = description;
    this.clasificacion = clasificacion;
    this.fecha = new Date().toISOString();
  }
}
