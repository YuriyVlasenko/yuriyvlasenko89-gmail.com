import { Injectable } from '@angular/core';
import { ProductCategoriesService } from '../repositories/product-categories.service';
import { filter, take, first } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoriesManagerService {
  constructor(private productCategoriesRepository: ProductCategoriesService) {}

  getCategories() {
    return this.productCategoriesRepository.getItems();
  }

  getCategory({ id, name }) {
    return this.getCategories().then((categories) => {
      if (id) {
        return categories.find((category) => category.id === id);
      }
      if (name) {
        return categories.find(
          (category) => category.name.toLowerCase() === name.toLowerCase()
        );
      }
      return null;
    });
  }
}
