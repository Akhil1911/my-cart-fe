import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  selectedCategory: string = '';

  constructor(private router: ActivatedRoute, private title: Title) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((param) => {
      if (param['category']) {
        this.selectedCategory = param['category'];
        this.title.setTitle(param['category']);
      } else {
        this.selectedCategory = '';
        this.title.setTitle('Products');
      }
    });
  }
}
