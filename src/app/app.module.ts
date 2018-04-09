import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { TopBarComponent } from './shared/topbar/topbar.component';
import { LeftBarComponent } from './shared/leftbar/leftbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LeftBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
