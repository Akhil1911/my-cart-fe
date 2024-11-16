import { Routes } from '@angular/router';
import { UserComponent } from '../pages/user/user.component';
// import { RedirectComponent } from '../pages/auth/redirect/redirect.component';
export const AppRoutes: Routes = [
  //   {
  //     path: '',
  //     pathMatch: 'full',
  //     component: RedirectComponent,
  //   }, //will work on this after some proper authentication is added like token or role based auth
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth.route').then((m) => m.AuthRoutes),
  },
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () => import('./user.route').then((m) => m.UserRoutes),
  },
];
//TODO: implement route properly after some proper authentication is added like token or role based auth
