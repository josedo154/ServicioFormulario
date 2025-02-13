import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Empleado} from '../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private jsonURL = 'assets/empleados.json';

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<{ id: number; nombre: string }[]>(this.jsonURL).pipe(
      map(data => data.map(emp => new Empleado(emp.id, emp.nombre)))
    );
  }
}

