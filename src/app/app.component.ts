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

}
