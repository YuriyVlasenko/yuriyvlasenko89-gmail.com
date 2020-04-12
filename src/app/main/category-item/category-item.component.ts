import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { ProductCategory } from 'src/app/services/repositories/product-categories.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
  host: { class: 'category-item' },
})
export class CategoryItemComponent implements OnInit, OnChanges {
  @Input('data') data: ProductCategory;
  @Output() choose = new EventEmitter<ProductCategory>();

  constructor() {}

  ngOnChanges() {}

  ngOnInit(): void {}

  onClick() {
    this.choose.emit(this.data);
  }
}
