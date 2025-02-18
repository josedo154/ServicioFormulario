import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  private modeSubject = new BehaviorSubject<string>('crearFormulario');
  mode$ = this.modeSubject.asObservable();

  cambiarMode(nuevoMode: string) {
    this.modeSubject.next(nuevoMode);
    console.log(nuevoMode+"Prueba exitosamente: "+this.modeSubject.value);
  }
}
