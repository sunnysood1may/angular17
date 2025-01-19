import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    //{path:'',component:DashboardComponent,title:'Home'},
    {path:'about',component:AboutComponent,title:'About us'},
    {path:'aboutnew',component:AboutComponent,outlet:'outlet2'},
    {path:'contact',component:ContactComponent,title:'Contact us'},
    {path:'**',component:PagenotfoundComponent,title:'Page not found!!'}
];
