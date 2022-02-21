import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.css'],
})
export class HeaderAppComponent implements OnInit {
  @Input() title: string = '';
  private authServiceUser: Subscription | undefined;
  isAuth = false;
  user: string | null | undefined;
  role: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('currentLoggedinUser');
    console.log(this.user);
    if (this.user) {
      this.isAuth = true;
    }

    let user: any = localStorage.getItem('currentLoggedinUser');
    this.role = JSON.parse(user).user.role.toString();

     
  }
  onLogOut() {
    localStorage.clear();
    //this.router.navigate(['home']);
    this.router.navigate(['home']).then(() => {
      window.location.reload();
    });
  }
}
