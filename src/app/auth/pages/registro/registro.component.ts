import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {



  miFormulario: FormGroup = this._fb.group({
    nombre: ['', [ Validators.required, Validators.pattern( this._vs.nombreApellidoPattern )  ] ],
    email: ['', [ Validators.required, Validators.pattern( this._vs.emailPattern ) ], [ this._emailValidator ] ], 
    username: ['', [ Validators.required, this._vs.noPuedeSerMinetaky ] ],
    password: ['', [ Validators.required, Validators.minLength(6)  ] ],
    password2: ['', [ Validators.required ] ]
  },{
    validators: [ this._vs.camposIguales( 'password' , 'password2' ) ]
  })

  constructor( private _fb: FormBuilder,
               private _vs: ValidatorService,
               private _emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Veronica Melendez',
      email: 'test@test.com',
      username: 'vmmm'
    })

  }

  campoNoValido( campo: string ){
    return this.miFormulario.get(campo)?.invalid &&
            this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log( this.miFormulario.value );

    this.miFormulario.markAllAsTouched();

  }

}
