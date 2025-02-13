export class Cliente {
  static contadorId = 100;
  id: number;
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.id = Cliente.contadorId;
    Cliente.contadorId++;
  }
}
