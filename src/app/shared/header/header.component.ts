import { Component, computed, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  matAccountCircleOutline,
  matShoppingCartOutline,
  matSearchOutline,
  matLoginOutline,
} from '@ng-icons/material-icons/outline';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Categories, ICategories } from './mock';
import { Store } from '../../Store/Store';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIconComponent, NgbDropdownModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [
    provideIcons({
      matAccountCircleOutline,
      matShoppingCartOutline,
      matSearchOutline,
      matLoginOutline,
    }),
  ],
})
export class HeaderComponent implements OnInit {
  categories!: ICategories;

  activeUserRole = computed(() => {
    return this.store.activeUser();
  });

  constructor(protected store: Store, private router: Router) {}

  ngOnInit(): void {
    this.categories = Categories;
  }

  handleHome() {
    const hasAdminRole = this.activeUserRole() === 'admin';
    this.router.navigate(hasAdminRole ? ['/admin', 'dashboard'] : ['/user']);
  }
  handleLogin() {
    //api response role ... can do given work in service 😉...
    this.store.setActiveUser('user');
    this.router.navigate(['/user']);
  }

  handleNavigateToCategory(category: string) {
    this.router.navigate(['/user', 'products'], { queryParams: { category } });
  }

  handleLogout() {
    this.store.setActiveUser('guest');
    this.router.navigate(['/auth', 'login']);
  }
}
