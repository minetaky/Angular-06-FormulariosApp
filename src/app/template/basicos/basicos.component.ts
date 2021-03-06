import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Blusa estampado Felinos',
    precio: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  // guardar( miFormulario: NgForm ){
  //   console.log( miFormulario );
  // }

  nombreValido(): boolean{
    return this.miFormulario?.controls['producto']?.invalid
          && this.miFormulario?.controls['producto']?.touched;
  }

  precioInValido(): boolean{
    

    return this.miFormulario?.controls['precio']?.touched &&
           (   this.miFormulario?.controls['precio']?.value < 1  );
  }

  guardar(  ){
    console.log( this.miFormulario );

    this.miFormulario.resetForm({
      producto: 'Blusa',
      precio: 0,
      existencias: 0
    });

  }

}
