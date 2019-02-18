import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//Modulo de paginas
import { PagesModule } from './pages/pages.module';

//Rutas

import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTING 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
