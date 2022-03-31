import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array([
      [ 'Con olor a fresas' ],
      [ 'Como aman los hombres' ]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get getFavoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  
  guardar(){

    if( this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  campoInvalido(campo: string){

    return this.miFormulario.controls[campo].touched &&
           this.miFormulario.controls[campo].errors;

  }

  agregarFavorito(){
    if( this.nuevoFavorito.invalid ){ return; }

    //this.getFavoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.getFavoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset();
  }


  borrar(i: number){
    //if( this.nuevoFavorito.invalid ){ return; }

    //this.getFavoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.getFavoritosArr.removeAt(i);

    this.nuevoFavorito.reset();
  }


  enter(){}

}
