import { Injectable } from '@angular/core';
import { ProductsService, Product } from '../repositories/products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsManagerService {
  private cache: Product[] = [];
  constructor(private productsRepository: ProductsService) {}

  getProducts(clearCache = false): Promise<Product[]> {
    if (this.cache.length && !clearCache) {
      return Promise.resolve(this.cache);
    }
    return this.productsRepository.getItems().then((products) => {
      this.cache = products;
      return products;
    });
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
