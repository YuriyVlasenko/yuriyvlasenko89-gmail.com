import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductCategory } from 'src/app/services/repositories/product-categories.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit, OnChanges {
  @Input('data') data: ProductCategory;
  public imageUrl: string = '';

  constructor() {}

  ngOnChanges() {
    if (this.data) {
      console.log('data loaded');
      this.imageUrl =
        this.data.imageUrls &&
        this.data.imageUrls.length &&
        this.data.imageUrls[0];
    }
  }
  ngOnInit(): void {}
}
