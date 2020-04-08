import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { BascketItem, BascketService } from 'src/app/services/bascket.service';

@Component({
  selector: 'app-bascket-item',
  templateUrl: './bascket-item.component.html',
  styleUrls: ['./bascket-item.component.scss'],
  host: { class: 'bascket-item' },
})
export class BascketItemComponent implements OnInit, OnChanges {
  public imageUrl: string;
  @Input('data') data: BascketItem;
  @Output('changeCount') changeCount= new EventEmitter<object>();
  @Output('remove') remove = new EventEmitter<string>()

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.data) {
      this.imageUrl = this.data.product.imageUrls.length
        ? this.data.product.imageUrls[0]
        : '';
    }
  }

  removeProduct() {
    this.remove.emit(this.data.product.id)
  }

  onChangeCount(count) {
    this.changeCount.emit({ productId: this.data.product.id, count: count })
  }
}
