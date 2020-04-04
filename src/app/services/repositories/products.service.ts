import { Injectable } from "@angular/core";
import { ProductPart } from "./product-parts.service";
import { ProductOption } from "./product-options.service";
import { from, Observable } from "rxjs";

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
    public title: string,
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

  getItems(): Observable<Product> {
    var result = [];
    for (var i = 1; i < 11; i++) {
      result.push(
        new Product(
          i + "",
          `product ${i}`,
          `description ${i}`,
          ["https://styleroom.com.ua/wp-content/uploads/2020/02/097-6.jpg"],
          "1",
          new ProductSize(`${10 * i}`, "20", `${30 + i}`),
          [],
          [],
          100 * i
        )
      );
    }
    return from(result);
  }
}
