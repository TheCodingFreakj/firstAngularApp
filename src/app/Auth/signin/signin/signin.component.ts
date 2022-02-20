import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ValidationsService } from 'src/app/services/validations/validations.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  isValid = false;
  myForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  passwordmatch: boolean | undefined = true;
  isLoading: boolean | undefined;
  error: any;

  constructor(private authSignin: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onFocusEmail() {
    if (
      this.myForm.get('email')?.value !== '' &&
      this.myForm.get('password')?.value !== ''
    ) {
      this.submitted = true;
      this.isValid = true;
    } else {
      this.submitted = false;
      this.isValid = false;
    }

    // console.log(this.myForm);
  }
  onSignin() {
    //call the auth service
    this.isLoading = true;

    setTimeout(() => {
      this.authSignin.signin(this.myForm.value).subscribe(
        (data: any) => {
          //console.log(data);
          localStorage.setItem('currentLoggedinUser', JSON.stringify(data));

          this.isLoading = false;
          //data && this.router.navigate(['dashboard'])
          let user :any = localStorage.getItem('currentLoggedinUser')
        
           if(JSON.parse(user).user.role.includes("Admin")){
            this.router.navigate(['dashboard']).then(() => {
              window.location.reload();
            })
           }

           if(JSON.parse(user).user.role.includes("User")){
            this.router.navigate(['userdashboard']).then(() => {
              window.location.reload();
            })
           }

         ;
        },
        (errorMessage: any) => {
          console.log(errorMessage);
          this.error = errorMessage;

          this.isLoading = false;
        }
      );
    }, 5000);
  }
}

//https://www.toptal.com/firebase/role-based-firebase-authentication#:~:text=In%20a%20nutshell%2C%20Firebase%20Authentication,a%20flexible%20role%2Dbased%20API.
