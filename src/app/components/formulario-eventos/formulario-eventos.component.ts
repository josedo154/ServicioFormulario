import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-formulario-eventos',
  standalone: true,
  templateUrl: './formulario-eventos.component.html',
  styleUrl: './formulario-eventos.component.css',
  imports: [ReactiveFormsModule]
})
export class FormularioEventosComponent {
  formulario = new FormGroup({
    nombreCliente: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    titulo: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]),
    categoria: new FormControl('', [Validators.required, this.categoriaValida]),
    fecha: new FormControl('', [Validators.required])
  });

  categoriaValida(control: AbstractControl): ValidationErrors | null {
    const valoresPermitidos = ['log', 'warn', 'error'];
    return valoresPermitidos.includes(control.value) ? null : { categoriaInvalida: true };
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log('Formulario enviado', this.formulario.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}

