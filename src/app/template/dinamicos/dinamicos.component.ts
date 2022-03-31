import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito{
  id: number,
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoDorama: string = '';

 persona: Persona = {
   nombre: 'Verónica',
   favoritos: [
     { id:1, nombre: 'Con olor a Fresas'},
     { id:1, nombre: 'Mi chica Unicornio'}
   ]
 }

  guardar(){

    console.log('Formulario posteado');
    this.miFormulario.resetForm({
      nombre: ''
    });

  }

  eliminar( index: number ){
    this.persona.favoritos.splice( index, 1 );
  }

  agregar(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoDorama
    }
    this.persona.favoritos.push({ ...nuevoFavorito });

    this.nuevoDorama = '';
  }

}
