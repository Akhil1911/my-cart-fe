import { Routes } from '@angular/router';
import { ProductListComponent } from '../pages/user/product-list/product-list.component';
import { ProductDetailComponent } from '../pages/user/product-detail/product-detail.component';
import { CartComponent } from '../pages/user/cart/cart.component';
import { CheckoutComponent } from '../pages/user/checkout/checkout.component';
import { OrderHistoryComponent } from '../pages/user/order-history/order-history.component';
import { ProfileComponent } from '../pages/user/profile/profile.component';
import { LayoutComponent } from '../shared/layout/layout.component';
export const UserRoute: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products',
      },
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'product/:name',
        title: 'Product Detail',
        component: ProductDetailComponent,
      },
      {
        path: 'cart',
        title: 'Cart',
        component: CartComponent,
      },
      {
        path: 'checkout',
        title: 'Checkout',
        component: CheckoutComponent,
      },
      {
        path: 'order-history',
        title: 'Order History',
        component: OrderHistoryComponent,
      },
      {
        path: 'my-profile',
        title: 'Profile',
        component: ProfileComponent,
      },
    ],
  },
];
