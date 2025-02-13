import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private jsonURL = 'assets/empleados.json';

  constructor(private http: HttpClient) {}

  obtenerEmpleados(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }
}

