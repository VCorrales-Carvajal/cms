
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { environment } from '../environments/environment';

import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { PageComponent } from './pages/new/page.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';


const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'pages' },
  { path: 'pages', component: PagesComponent },
  { path: 'pages/:id', component: PageComponent },
  { path: 'media', component: MediaComponent },
  { path: 'media/:id', component: PageComponent },
  { path: 'settings', component: SettingsComponent },
	{ path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
