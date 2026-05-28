import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [FormsModule,DecimalPipe],
  templateUrl: './pregunta1.html',
  styleUrl: './pregunta1.css',
})
export class Pregunta1 {
  n1: number = 0;
  n2: number = 0;
  n3: number = 0;
  n4: number = 0;

  suma: number = 0;
  promedio: number = 0;
  estado: string = '';
  mensaje: string = '';

  procesar(): void {
    if (!this.validarNotas()) {
      this.mensaje = 'Todas las notas deben estar entre 0 y 20.';
      this.limpiarResultados();
      return;
    }
    this.suma = this.n1 + this.n2 + this.n3 + this.n4;
    this.promedio = this.suma / 4;

    if (this.promedio >= 17) {
      this.estado = 'Excelente';
    } else if (this.promedio >= 13) {
      this.estado = 'Regular';
    } else {
      this.estado = 'Riesgo';
    }

    this.mensaje = 'Proceso realizado correctamente.';
  }

  validarNotas(): boolean {
    return this.n1 >= 0 && this.n1 <= 20 &&
           this.n2 >= 0 && this.n2 <= 20 &&
           this.n3 >= 0 && this.n3 <= 20 &&
           this.n4 >= 0 && this.n4 <= 20;
  }

  limpiarResultados(): void {
    this.suma = 0;
    this.promedio = 0;
    this.estado = '';
  }

  limpiarFormulario(): void {
    this.n1 = 0;
    this.n2 = 0;
    this.n3 = 0;
    this.n4 = 0;
    this.mensaje = '';
    this.limpiarResultados();
  }
}