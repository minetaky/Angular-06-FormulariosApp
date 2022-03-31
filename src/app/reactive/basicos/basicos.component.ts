import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit  {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ], //valor, validadores sincronos: Ejecutado al momento en que presiona tecla, Validador asincrono: ejecutado a destiempo
    precio: [ , [ Validators.required, Validators.min(0) ] ],
    existencias: [ , [ Validators.required, Validators.min(0) ] ]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Con olor a fresas',
      precio: 89
    })
  }

  campoInvalido(campo: string){

    return this.miFormulario.controls[campo].touched &&
           this.miFormulario.controls[campo].errors;

  }

  guardar(){

    if( this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }




  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Con olor a fresas'),
  //   precio: new FormControl(1000),
  //   existencias: new FormControl(1500),
  // })

 

}
