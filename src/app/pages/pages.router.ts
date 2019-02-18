import { RouterModule, Routes} from '@angular/router';
import { PagesComponent } from './pages.component';


const ROUTE_PAGES: Routes = [
    {
        path: '', component: PagesComponent,
          
    }
];

export const ROUTES_PAGES = RouterModule.forChild ( ROUTE_PAGES );