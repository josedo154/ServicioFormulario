import { Cliente } from "./cliente";

export class Evento {
  static contadorId = 100;
  id: number;
  cliente: Cliente;
  titulo: string;
  description: string;
  clasificacion: string;
  fecha: string;

  constructor(cliente: Cliente, titulo: string, description: string, clasificacion: string) {
    this.id = Evento.contadorId;
    Evento.contadorId++;

    this.cliente = cliente;
    this.titulo = titulo;
    this.description = description;
    this.clasificacion = clasificacion;
    this.fecha = new Date().toISOString();
  }
}
