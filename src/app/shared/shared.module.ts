import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';


@NgModule({
    declarations: [
      SidebarComponent,
      HeaderComponent,
      BreadcrumsComponent
     
    ],
    imports: [
      CommonModule,
      RouterModule
  
    ],
    exports: [
        SidebarComponent,
        HeaderComponent
    ]
  })
  export class SharedModule { }