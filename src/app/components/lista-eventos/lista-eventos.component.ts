import {Component, OnInit} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {Evento} from '../../model/evento';
import {EventosService} from '../../services/eventos.services';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-lista-eventos',
  imports: [
    CommonModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './lista-eventos.component.html',
  standalone: true,
  styleUrl: './lista-eventos.component.css'
})

export class ListaEventosComponent implements OnInit{
  eventos: Evento[] = [];
  categoriaSeleccionada: string = '';

  constructor(private eventoService: EventosService) {}

  ngOnInit() {
    this.eventoService.getEventos().subscribe(datos => {
      this.eventos = datos;
    });
  }
}
