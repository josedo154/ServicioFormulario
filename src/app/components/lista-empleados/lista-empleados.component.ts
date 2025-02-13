import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de Empleados</h2>
    <ul *ngIf="empleados.length > 0; else cargando">
      <li *ngFor="let empleado of empleados">
        {{ empleado.nombre }} - {{ empleado.salario | currency }}
      </li>
    </ul>
    <ng-template #cargando>
      <p>Cargando empleados...</p>
    </ng-template>
  `
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: any[] = [];

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit() {
    this.empleadosService.obtenerEmpleados().subscribe(datos => {
      this.empleados = datos;
    });
  }
}
