import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/auth/login/login.component';
export const AuthRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
];
