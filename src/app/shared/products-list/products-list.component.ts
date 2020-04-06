import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from 'src/app/services/repositories/products.service';
import { Router } from '@angular/router';
import routerPaths from '../../routerPaths.const';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  host: { class: 'products-list' },
})
export class ProductsListComponent implements OnInit, OnChanges {
  @Input('products') products: Product[];

  constructor(private router: Router) {}

  ngOnChanges() {
    console.log('this.products', this.products);
  }

  ngOnInit(): void {}

  onChoose(product: Product) {
    this.router.navigateByUrl(`${routerPaths.PRODUCT}/${product.id}`);
  }

  onBuy(product: Product) {
    console.log('add to basket', product);
  }
}
