import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeService } from '../../services/mode.service';
import { FormularioEventosComponent } from '../formulario-eventos/formulario-eventos.component';
import { ListaEventosComponent } from '../lista-eventos/lista-eventos.component';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [
    CommonModule,
    FormularioEventosComponent,
    ListaEventosComponent
  ],
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent {
  mode: string = '';

  constructor(private modeService: ModeService) {
    this.modeService.mode$.subscribe(mode => {
      this.mode = mode;
    });
  }
}
