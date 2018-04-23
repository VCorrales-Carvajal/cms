import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { TopBarComponent } from './shared/topbar/topbar.component';
import { LeftBarComponent } from './shared/leftbar/leftbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';

import { AuthService } from './shared/auth.service';
import { MenuService } from './shared/menu.service';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './shared/data.service';
import { PageComponent } from './pages/new/page.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LeftBarComponent,
    FooterComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule
    
    
  ],
  providers: [AuthService, MenuService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
