import { Routes } from '@angular/router';
import { exLoginComponent } from './external.login.component/external.login.component';
import { LoginComponent } from './login.component/login.compnent';



export const AuthRoutes: Routes = [
{component:LoginComponent,path:"login"},
{component:exLoginComponent,path:"exlogin"},
];

