import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Persona {
  nombre: string;
  correo: string;
  peso: number;
  altura: number;
  imc: number;
  estado: string;
}
@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pregunta2.html',
  styleUrl: './pregunta2.css',
})
export class Pregunta2 {
  nuevoPersona: Persona = { nombre: '', correo:'', peso: 0, altura: 0, imc:0, estado:'' };
  listaPersona: Persona[] = [];
    agregar() {

    if (this.nuevoPersona.nombre.trim() !== '') {
      this.listaPersona.push({ ...this.nuevoPersona });
      this.limpiar();
    }
    
  }
    limpiar() {
    this.nuevoPersona = { nombre: '', correo: '', peso: 0, altura:0, imc:0, estado:'' };
  }

}
