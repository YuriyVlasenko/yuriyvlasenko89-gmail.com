import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from 'src/app/services/repositories/products.service';
import { Router } from '@angular/router';
import routerPaths from '../../routerPaths.const';
import { BascketService, Bascket } from 'src/app/services/bascket.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  host: { class: 'products-list' },
})
export class ProductsListComponent implements OnInit, OnChanges {
  @Input('products') products: Product[];
  private bascket: Bascket;

  constructor(private router: Router, private basketService: BascketService) {}

  ngOnChanges() {}

  ngOnInit(): void {
    this.basketService.getBasket().then((bascket) => (this.bascket = bascket));
  }

  onChoose(product: Product) {
    this.router.navigateByUrl(`${routerPaths.PRODUCT}/${product.id}`);
  }

  onBuy(product: Product) {
    this.bascket.addItem(product, 1);
  }
}
