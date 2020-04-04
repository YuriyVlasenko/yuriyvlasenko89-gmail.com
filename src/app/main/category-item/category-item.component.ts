import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { ProductCategory } from 'src/app/services/repositories/product-categories.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
  host: { class: 'category-item' }
})
export class CategoryItemComponent implements OnInit, OnChanges {
  @Input('data') data: ProductCategory;
  @Output() choose = new EventEmitter<ProductCategory>();

  public imageUrl: string = '';

  constructor() {}

  ngOnChanges() {
    if (this.data) {
      this.imageUrl =
        this.data.imageUrls &&
        this.data.imageUrls.length &&
        this.data.imageUrls[0];
    }
  }
  ngOnInit(): void {}

  onClick() {
    this.choose.emit(this.data);
  }
}
