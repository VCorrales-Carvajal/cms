import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public isLoggedIn: boolean = false;
  ngOnInit(): void { }
  constructor(private auth: AuthService) { 
    this.auth.userState
      .subscribe(x => this.isLoggedIn = x);
  }

  public doLogin() {
    this.auth.login()
      .then(
        (value) => this.auth.setLoginStatus(true), 
        (reason) => this.auth.setLoginStatus(false));
  }

  public doLogout() {
    this.auth.logout()
    .then(
      (value) => this.auth.setLoginStatus(false), 
      (reason) => this.auth.setLoginStatus(false));
  }

}
