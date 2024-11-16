import { Routes } from '@angular/router';
import { UserHomeComponent } from '../pages/user/home/home.component';
import { UserCartComponent } from '../pages/user/cart/cart.component';
export const UserRoutes: Routes = [
  {
    path: '',
    title: 'Home',
    component: UserHomeComponent,
  },
  {
    path: 'cart',
    title: 'Cart',
    component: UserCartComponent,
  },
];
