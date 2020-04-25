import { Component, OnInit } from '@angular/core';
import {
  BascketService,
  Bascket,
  BascketItem,
} from '../services/bascket.service';
import { ProductOrder } from '../services/repositories/product-orders.service';
import { ProductOrdersManagerService } from '../services/data-managers/product-orders-manager.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  public order: ProductOrder = new ProductOrder('', '', '', '', '', '', '');
  public orderItems: BascketItem[] = [];
  public totalPrice: number = 0;
  public orderId: string = '';
  private basket: Bascket;

  constructor(
    private basketService: BascketService,
    private productOrdersManagerService: ProductOrdersManagerService
  ) {}
  public isOrderValid() {
    this.order;
    return true;
  }

  ngOnInit(): void {
    this.basketService.getBasket().then((basket) => {
      this.basket = basket;
      this.orderItems = this.basket.getItems();
      this.totalPrice = this.basket.getTotalPrice();
    });
  }

  onSubmit() {
    // this.order.
    // this.basket.clear();
    // this.checkoutForm.reset();
    // this.orderItems = [];
    // console.warn('Your order has been submitted', customerData);
  }
}
