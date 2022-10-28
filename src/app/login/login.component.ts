import { Component, OnInit } from '@angular/core';
import { User } from '../login';
import { StoreService } from '../services/store.service';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any
  constructor(public storeService : StoreService, public authService : AuthService) {
    this.user = {
      username : '',
      password : ''
    }
  }

  ngOnInit(): void {
  }
  login(){
    this.storeService.login(this.user)
  }

  signup(){
    this.storeService.signup(this.user)
  }

  loginWithRedirect(): void {
    this.authService.loginWithRedirect();
  }

  logWithRedirect(): void {
    this.authService.loginWithRedirect({ screen_hint: 'signup' });
  }
}
