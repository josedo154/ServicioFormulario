import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Empleado} from '../model/empleado';
import {Evento} from '../model/evento';
import {Cliente} from '../model/cliente';

@Injectable({
  providedIn: 'root'
})

export class EventosService {
  private jsonURL = 'assets/eventos.json';

  constructor(private http: HttpClient) {}

  getEventos(): Observable<Evento[]> {
    return this.http.get<{ id: number; cliente: { nombre: string }; titulo: string; description: string; clasificacion: string; fecha?: string }[]>(this.jsonURL).pipe(
      map(data =>
        data.map(evento =>
          new Evento(
            evento.id,
            new Cliente(evento.cliente.nombre),
            evento.titulo,
            evento.description,
            evento.clasificacion
          )
        )
      )
    );
  }


}
