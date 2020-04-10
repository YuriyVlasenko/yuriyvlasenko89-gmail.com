import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  BascketService,
  Bascket,
  BascketItem,
} from '../services/bascket.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  public checkoutForm;
  public orderItems: BascketItem[] = [];
  public totalPrice: number = 0;
  private basket: Bascket;

  constructor(
    private formBuilder: FormBuilder,
    private basketService: BascketService
  ) {
    this.checkoutForm = this.formBuilder.group({
      buyer: '',
      phone: '',
      email: '',
      city: '',
      region: '',
      deliveryDepartment: '',
      notes: '',
    });
  }

  ngOnInit(): void {
    this.basketService.getBasket().then((basket) => {
      this.basket = basket;
      this.orderItems = this.basket.getItems();
      this.totalPrice = this.basket.getTotalPrice();
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.basket.clear();
    // this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
