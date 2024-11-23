import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  selectedCategory: string = '';

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((param) => {
      if (param['category']) {
        this.selectedCategory = param['category'];
      } else {
        this.selectedCategory = '';
      }
    });
  }
}
