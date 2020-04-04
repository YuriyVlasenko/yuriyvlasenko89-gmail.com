import { Injectable } from '@angular/core';
import { ProductsService, Product } from '../repositories/products.service';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsManagerService {
  constructor(private productsRepository: ProductsService) {}

  getProducts() {
    return this.productsRepository.getItems();
  }

  getProductsByCategory(categoryId: string) {
    return this.getProducts().pipe(filter(pr => pr.categoryId === categoryId));
  }

  getProduct(productId: string) {
    return this.getProducts().pipe(first(pr => pr.id === productId, null));
  }
}
