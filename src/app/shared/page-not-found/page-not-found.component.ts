import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Store } from '../../Store/Store';
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent {
  constructor(private router: Router, private store: Store) {}

  handleRedirect() {
    const hasAdminRole = this.store.activeUser() === 'admin';
    this.router.navigate(hasAdminRole ? ['/admin', 'dashboard'] : ['/user']);
  }
}
