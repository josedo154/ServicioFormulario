import {Component, OnInit} from '@angular/core';
import {EmpleadosService} from '../../services/empleados.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-select-empleados',
  imports: [
    NgForOf
  ],
  templateUrl: './select-empleados.component.html',
  standalone: true,
  styleUrl: './select-empleados.component.css'
})
export class SelectEmpleadosComponent implements OnInit{
  empleados: any[] = [];

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit() {
    this.empleadosService.getEmpleados().subscribe(datos => {
      this.empleados = datos;
    });
  }
}
