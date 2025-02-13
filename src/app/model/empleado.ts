export class Empleado {
  static contadorId = 100;
  id: number;
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.id = Empleado.contadorId;
    Empleado.contadorId++;
  }
}
