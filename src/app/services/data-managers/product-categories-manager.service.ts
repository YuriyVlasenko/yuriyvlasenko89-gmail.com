import { Injectable } from '@angular/core';
import { ProductCategoriesService } from '../repositories/product-categories.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesManagerService {
  constructor(private productCategoriesRepository: ProductCategoriesService) {}

  getCategories() {
    return this.productCategoriesRepository.getItems();
  }
}
