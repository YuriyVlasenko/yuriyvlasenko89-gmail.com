import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BascketItem } from 'src/app/services/bascket.service';

@Component({
  selector: 'app-bascket-item',
  templateUrl: './bascket-item.component.html',
  styleUrls: ['./bascket-item.component.scss'],
  host: { class: 'bascket-item' },
})
export class BascketItemComponent implements OnInit, OnChanges {
  public imageUrl: string;
  @Input('data') data: BascketItem;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.data) {
      this.imageUrl = this.data.product.imageUrls.length
        ? this.data.product.imageUrls[0]
        : '';
    }
  }

  removeItem(id) {}

  changeCount(productId, count) {}
}
