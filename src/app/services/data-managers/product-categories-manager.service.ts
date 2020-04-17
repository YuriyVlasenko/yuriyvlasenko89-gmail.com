import { Injectable } from '@angular/core';
import {
  ProductCategoriesService,
  ProductCategory,
} from '../repositories/product-categories.service';
import { filter, take, first } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoriesManagerService {
  private cache: ProductCategory[] = [];
  constructor(private productCategoriesRepository: ProductCategoriesService) {}

  createCategory(category: ProductCategory) {
    return this.productCategoriesRepository.createItem(category);
  }
  getCategories(clearCache = false) {
    if (this.cache && !clearCache) {
      return Promise.resolve(this.cache);
    }
    return this.productCategoriesRepository.getItems().then((items) => {
      this.cache = items;
      return items;
    });
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
