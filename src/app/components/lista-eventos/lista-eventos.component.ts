import {Component, OnInit} from '@angular/core';
import {Evento} from '../../model/evento';
import {EmpleadosService} from '../../services/empleados.service';
import {EventosService} from '../../services/eventos.services';

@Component({
  selector: 'app-lista-eventos',
  imports: [],
  templateUrl: './lista-eventos.component.html',
  standalone: true,
  styleUrl: './lista-eventos.component.css'
})

export class ListaEventosComponent implements OnInit{
  eventos: Evento[] = [];

  constructor(private eventoService: EventosService) {}

  ngOnInit() {
    this.eventoService.getEventos().subscribe(datos => {
      this.eventos = datos;
    });
  }
}
