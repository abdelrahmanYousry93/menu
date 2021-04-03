import { Routes } from '@angular/router';

import {MyMenuComponent} from './menu.component/MenuComponent'
import {MyMenuItemComponent} from './menu.item.component/menu.item.component'

export const  MenuRoutes: Routes = [
{component:MyMenuComponent,path:"menu"},
{component:MyMenuItemComponent,path:"item"}

];

