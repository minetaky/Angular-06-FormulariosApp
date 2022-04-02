import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor( private _http: HttpClient ) { }

  validate(control: AbstractControl):  Observable<ValidationErrors | null> {

    const email = control.value;
    console.log(email);
    return this._http.get<any[]>(`http://localhost:3000/usuarios?q=${ email }`)
            .pipe(
              map( resp => {
                return ( resp.length === 0) ? null : { emailTomado: true } 
              })
            )
  }
}
