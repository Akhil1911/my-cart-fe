import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { ProfileComponent } from '../pages/user/profile/profile.component';
export const AppRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
  {
    path: 'my-profile',
    title: 'Profile',
    component: ProfileComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin.route').then((m) => m.AdminRoute),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth.route').then((m) => m.AuthRoute),
  },
  {
    path: 'user',
    loadChildren: () => import('./user.route').then((m) => m.UserRoute),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
