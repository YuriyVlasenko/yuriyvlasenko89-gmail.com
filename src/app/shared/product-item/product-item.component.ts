import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from 'src/app/services/repositories/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  host: { class: 'product-item' }
})
export class ProductItemComponent implements OnInit, OnChanges {
  @Input('data') data: Product;
  public imageUrl: string;
  public currency: string = 'грн';

  constructor() {}

  ngOnChanges(): void {
    if (this.data) {
      this.imageUrl = this.data.imageUrls.length ? this.data.imageUrls[0] : '';
    }
  }

  ngOnInit(): void {}
}
