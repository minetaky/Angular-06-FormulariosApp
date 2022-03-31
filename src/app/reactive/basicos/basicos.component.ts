import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ 'Con olor a fresas' ],
    precio: [ 0 ],
    existencias: [ 0 ]
  })

  constructor( private fb: FormBuilder ) { }

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Con olor a fresas'),
  //   precio: new FormControl(1000),
  //   existencias: new FormControl(1500),
  // })

 

}
