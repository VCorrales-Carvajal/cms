import { Component, ViewChild, OnInit } from '@angular/core';

import { AuthService } from './shared/auth.service';
import { MenuService } from './shared/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public showPages: Boolean = true;
  public showMedia: Boolean = false;
  public showSettings: Boolean = false;

  constructor(private auth: AuthService,
    private nav: MenuService) {  }

  setAllPagesToInvisible() {
    this['showPages'] = false;
    this['showMedia'] = false;
    this['showSettings'] = false;
  }
  ngOnInit(): void { 
    this.auth.userState
      .subscribe(x => this.auth.isLoggedIn = x);

    this.nav.page
      .subscribe(x => {
        this.setAllPagesToInvisible();
        this[x] = true;

      })

  }

}
