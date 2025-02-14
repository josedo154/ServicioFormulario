import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import {SelectEmpleadosComponent} from './components/select-empleados/select-empleados.component';
import {FormularioEventosComponent} from './components/formulario-eventos/formulario-eventos.component';
import {MenuComponent} from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaEmpleadosComponent, SelectEmpleadosComponent, FormularioEventosComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReporteWarning';
}

