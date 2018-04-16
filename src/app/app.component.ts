import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
  
  ngOnInit(): void { }

  constructor(private auth: AuthService) { 
    this.auth.userState
      .subscribe(x => this.auth.isLoggedIn = x);
  }

}
