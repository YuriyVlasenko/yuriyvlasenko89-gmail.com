import { Component, OnInit } from '@angular/core';
import {
  BascketService,
  Bascket,
  BascketItem,
} from '../services/bascket.service';
import { Router } from '@angular/router';
import routerPaths from '../routerPaths.const';

@Component({
  selector: 'app-bascket',
  templateUrl: './bascket.component.html',
  styleUrls: ['./bascket.component.scss'],
})
export class BascketComponent implements OnInit {
  public bascketItems: BascketItem[] = [];
  private bascket: Bascket;
  public showOrderForm: boolean = false;

  constructor(private bascketService: BascketService, private router: Router) {}

  ngOnInit(): void {
    this.bascketService.getBasket().then((bascket) => {
      this.bascket = bascket;
      this.bascketItems = bascket.getItems();
    });
  }

  getTotalPrice() {
    return (this.bascket && this.bascket.getTotalPrice()) || 0;
  }
  onChangeCount(data) {
    this.bascket.changeCount(data.productId, data.count);
  }

  onRemoveProduct(productId) {
    this.bascket.removeItem(productId);
    this.bascketItems = this.bascket.getItems();
  }

  createOrder() {
    this.router.navigateByUrl(routerPaths.ORDER);
  }
}
