import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  @Input() products;
  paginationConfig = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.products ? this.products.lenght : 0,
  }

  constructor() { }

  ngOnInit() {
  }
  pageChanged(event) {
    this.paginationConfig.currentPage = event;
  }
}
