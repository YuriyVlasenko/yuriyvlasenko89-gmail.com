import { Injectable } from '@angular/core';
import { ProductCategoriesService } from '../repositories/product-categories.service';
import { filter, take, first } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesManagerService {
  constructor(private productCategoriesRepository: ProductCategoriesService) {}

  getCategories() {
    return this.productCategoriesRepository.getItems();
  }

  getCategory({ id, name }) {
    let dataLoader = this.getCategories();
    if (id) {
      return dataLoader.pipe(first(category => category.id === id, null));
    }
    if (name) {
      return dataLoader.pipe(
        first(
          category => category.name.toLowerCase() === name.toLowerCase(),
          null
        )
      );
    }
    return from(null);
  }
}
