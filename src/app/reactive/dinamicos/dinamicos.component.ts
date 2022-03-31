import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ]
  })

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


  enter(){}

}
