import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  private modeSubject = new BehaviorSubject<string>('crearFormulario');
  mode$ = this.modeSubject.asObservable();

  cambiarMode(nuevoMode: string) {
    console.log(nuevoMode+"Prueba exitosamente");
    this.modeSubject.next(nuevoMode);
  }
}
