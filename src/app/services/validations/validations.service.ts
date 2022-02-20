import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class ValidationsService {
  passwordMismatch: boolean | undefined = true;

  constructor() {}
 
  MatchPassword(password: string, confirmPassword: string) {
    
    if (password !== confirmPassword) {
      return (this.passwordMismatch = true);
    } else {
      return (this.passwordMismatch = false);
    }
  }
}
