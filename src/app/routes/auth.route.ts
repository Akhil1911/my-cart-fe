import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/auth/login/login.component';
import { SignUpComponent } from '../pages/auth/sign-up/sign-up.component';
export const AuthRoute: Routes = [
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
  {
    path: 'sign-up',
    title: 'Sign Up',
    component: SignUpComponent,
  },
];
