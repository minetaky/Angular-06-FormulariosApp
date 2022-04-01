import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this._fb.group({

    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [false, Validators.requiredTrue ]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true
    } );

    this.miFormulario.valueChanges.subscribe( form => { 
      delete form.condiciones;
      this.persona = form;
     } )

  }

  guardar(){
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;

  }

}
