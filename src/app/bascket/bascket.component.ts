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

  constructor(private bascketService: BascketService) {}

  ngOnInit(): void {
    this.bascketService.getBasket().then((bascket) => {
      this.bascketItems = bascket.getItems();
    });
  }
}
