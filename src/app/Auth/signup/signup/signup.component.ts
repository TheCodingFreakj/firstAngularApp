import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ValidationsService } from 'src/app/services/validations/validations.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  role:string | undefined
  registerForm!: FormGroup;
  submitted = false;
  response!: string | '';
  isValid = false;
  isLoading = false;
  error: string = '';
  Role: string[] = ['Admin', 'User'];
  myForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  passwordmatch: boolean | undefined = true;
  constructor(
    private authSignup: AuthService,
    private customValidator: ValidationsService
  ) {}

  ngOnInit(): void {}

  onFocusEmail() {
    if (
      this.myForm.get('password')?.value !== '' &&
      this.myForm.get('confirmPassword')?.value !== ''
    ) {
      this.passwordmatch = this.customValidator.MatchPassword(
        this.myForm.get('password')?.value,
        this.myForm.get('confirmPassword')?.value
      );
    }

    this.passwordmatch === true
      ? (this.isValid = false)
      : (this.isValid = true);
    if (
      this.myForm.get('email')?.value !== '' &&
      this.myForm.get('password')?.value !== '' &&
      this.myForm.get('confirmPassword')?.value !== ''
    ) {
      this.submitted = true;
    } else {
      this.submitted = false;
    }

    // console.log(this.myForm);
  }

  onSignup() {

    let reqData={

      info:this.myForm.value,
      role:this.role

    }

    console.log(reqData)
    this.isLoading = true;

    setTimeout(() => {
      this.authSignup.signup(reqData).subscribe(
        (data:any) => {
          console.log(data);
          this.response = data?.message;
          this.isLoading = false;
        },
        (errorMessage) => {
          console.log(errorMessage);
          this.error = errorMessage
         
          this.isLoading = false;
        }
      );
    }, 5000);

    //call the auth service
  }

  chooseRole(role:any){
console.log(role.target.value)
this.role = role.target.value
  }
}
