import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


//Componentes
import { PagesComponent } from './pages.component';

//Rutas
import { ROUTES_PAGES } from './pages.router';





@NgModule({
  declarations: [
    PagesComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ROUTES_PAGES
    
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
