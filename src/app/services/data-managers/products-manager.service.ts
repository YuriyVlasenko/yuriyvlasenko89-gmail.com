import { Injectable } from '@angular/core';
import { ProductsService, Product } from '../repositories/products.service';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsManagerService {
  constructor(private productsRepository: ProductsService) {}

  getProducts(): Promise<Product[]> {
    return this.productsRepository.getItems();
  }

  getProductsByCategory(categoryId: string): Promise<Product[]> {
    return this.getProducts().then((products) =>
      products.filter((pr) => pr.categoryId === categoryId)
    );
  }

  getProduct(productId: string): Promise<Product> {
    return this.getProducts().then((products) =>
      products.find((pr) => pr.id === productId)
    );
  }
}
