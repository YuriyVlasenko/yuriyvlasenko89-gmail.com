import { Injectable } from "@angular/core";
import { ProductPart } from "./product-parts.service";
import { ProductOption } from "./product-options.service";
import { BehaviorSubject } from "rxjs";

export class ProductSize {
  constructor(
    public width: string,
    public height: string,
    public length: string
  ) {}
}

export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public imageUrls: string[],
    public categoryId: string,
    public size: ProductSize,
    public parts: ProductPart[],
    public options: ProductOption[],
    public price: number
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor() {}

  getItems() {
    var result = [];
    for (var i = 1; i < 11; i++) {
      result.push(
        new Product(
          i + "",
          `product ${i}`,
          `description ${i}`,
          [],
          "1",
          new ProductSize(`${10 * i}`, "20", `${30 + i}`),
          [],
          [],
          100 * i
        )
      );
    }
    return new BehaviorSubject(result);
  }
}
