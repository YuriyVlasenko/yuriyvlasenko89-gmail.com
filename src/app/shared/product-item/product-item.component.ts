import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Product } from 'src/app/services/repositories/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  host: { class: 'product-item' },
})
export class ProductItemComponent implements OnInit, OnChanges {
  @Input('data') data: Product;
  @Output() choose = new EventEmitter<Product>();
  @Output() buy = new EventEmitter<Product>();

  public imageUrl: string;

  constructor() {}

  ngOnChanges(): void {
    if (this.data) {
      this.imageUrl = this.data.imageUrls.length ? this.data.imageUrls[0] : '';
    }
  }

  ngOnInit(): void {}

  chooseProduct() {
    this.choose.emit(this.data);
  }

  buyProduct() {
    this.buy.emit(this.data);
  }
}
