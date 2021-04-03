import { Routes } from '@angular/router';

import { AuhtLayoutComponent } from './layouts/auht-layout/auht-layout.component';
import { AssignmentLayoutComponent } from './layouts/assignment-layout/assignment-layout.compnent';
import { MenuLayoutComponent } from './layouts/menu-layout/menu-layout.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: MenuLayoutComponent,
    children: [ 
      {
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full'
      },
      {
      path: '',
      loadChildren:
        () => import('./modules/menu.module/menu.module').then(m => m.MenuModule)
    }
    ]
  }
];


