import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    NgIconComponent,
    NgbDropdownModule,
  ],
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
  ngOnInit(): void {
    this.categories = Categories;
  }
}
