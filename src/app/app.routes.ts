//Rutas principal donde ingresa a la pagina
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';


const appRouete : Routes = [

    { path: 'Pagina', component: PagesComponent}
];

export const APP_ROUTING = RouterModule.forRoot(appRouete, {useHash: true} );