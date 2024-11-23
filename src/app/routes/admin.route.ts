import { Routes } from '@angular/router';
import { AdminDashboardComponent } from '../pages/admin/dashboard/dashboard.component';
import { UserManagementComponent } from '../pages/admin/user-management/user-management.component';
import { ProductManagementComponent } from '../pages/admin/product-management/product-management.component';
import { CategoryManagementComponent } from '../pages/admin/category-management/category-management.component';
import { BrandManagementComponent } from '../pages/admin/brand-management/brand-management.component';
export const AdminRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    title: 'Admin - Dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'manage-user',
    title: 'Admin - Manage User',
    component: UserManagementComponent,
  },
  {
    path: 'manage-products',
    title: 'Admin - Manage Products',
    component: ProductManagementComponent,
  },
  {
    path: 'manage-categories',
    title: 'Admin - Manage Categories',
    component: CategoryManagementComponent,
  },
  {
    path: 'manage-brands',
    title: 'Admin - Manage Brands',
    component: BrandManagementComponent,
  },
];
