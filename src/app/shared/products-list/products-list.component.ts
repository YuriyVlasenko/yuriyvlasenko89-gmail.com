import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from 'src/app/services/repositories/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  host: { class: 'products-list' }
})
export class ProductsListComponent implements OnInit, OnChanges {
  @Input('products') products: Product[];

  constructor() {}

  ngOnChanges() {
    console.log('this.products', this.products);
  }

  ngOnInit(): void {}
}
