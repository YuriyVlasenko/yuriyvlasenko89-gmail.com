import { Component, OnInit } from '@angular/core';
import {
  BascketService,
  Bascket,
  BascketItem,
} from '../services/bascket.service';

@Component({
  selector: 'app-bascket',
  templateUrl: './bascket.component.html',
  styleUrls: ['./bascket.component.scss'],
})
export class BascketComponent implements OnInit {
  public bascketItems: BascketItem[] = [];
  public bascket: Bascket;

  constructor(private bascketService: BascketService) {}

  ngOnInit(): void {
    this.bascket = this.bascketService.getBasket();
    console.log('this.bascket', this.bascket);
    // this.bascketItems = this.bascket.getItems();
  }
}
