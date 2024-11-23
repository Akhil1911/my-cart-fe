import { Routes } from '@angular/router';
import { ProductListComponent } from '../pages/user/product-list/product-list.component';
import { ProductDetailComponent } from '../pages/user/product-detail/product-detail.component';
import { CartComponent } from '../pages/user/cart/cart.component';
import { CheckoutComponent } from '../pages/user/checkout/checkout.component';
import { OrderHistoryComponent } from '../pages/user/order-history/order-history.component';

export const UserRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    title: 'Products',
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
];
