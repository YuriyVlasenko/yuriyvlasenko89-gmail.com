import { Injectable } from '@angular/core';
import { ProductsService, Product } from '../repositories/products.service';
import { ProductPartsService } from '../repositories/product-parts.service';
import { ProductOptionsService } from '../repositories/product-options.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsManagerService {
  private productPartsMap = {};
  private productOptionsMap = {};
  private cache: Product[] = [];
  constructor(
    private productsRepository: ProductsService,
    private productPartsService: ProductPartsService,
    private productOptionsService: ProductOptionsService
  ) {}

  private initDependencies() {
    let partsPromise = this.productPartsService
      .getItems()
      .then((productParts) => {
        productParts.forEach((productPart) => {
          this.productPartsMap[productPart.id] = productPart.name;
        });
      });
    let optionsPromise = this.productOptionsService
      .getItems()
      .then((productOptions) => {
        productOptions.forEach((productOption) => {
          this.productOptionsMap[productOption.id] = productOption.name;
        });
      });
    return Promise.all([partsPromise, optionsPromise]);
  }

  getProducts(clearCache = false): Promise<Product[]> {
    if (this.cache.length && !clearCache) {
      return Promise.resolve(this.cache);
    }
    return this.initDependencies().then(() => {
      return this.productsRepository.getItems().then((products) => {
        this.cache = products.map((product) => {
          product.parts = product.parts.map((part) => {
            return this.productPartsMap[part];
          });
          product.options = product.options.map((option) => {
            return this.productOptionsMap[option];
          });
          return product;
        });
        return products;
      });
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
