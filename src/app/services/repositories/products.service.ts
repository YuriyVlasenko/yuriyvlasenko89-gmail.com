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

  getFormatedPrice() {
    return `${this.price.toFixed(2)} грн.`;
  }
}

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor() {}

  getItems(): Promise<Product[]> {
    const productParts = [
      new ProductPart("1", "Зеркальное полотно AGC Mirox Ecological"),
      new ProductPart("2", "Трансформатор 220В/12В."),
      new ProductPart("3", "Led подсветка"),
    ];
    const productOptions = [
      new ProductOption("1", "Выключатель сенсорный — на касание."),
      new ProductOption("2", "Выключатель инфракрасный — на движение руки."),
      new ProductOption("3", "Индивидуальный размер"),
    ];

    var result = [];
    for (var i = 1; i < 11; i++) {
      result.push(
        new Product(
          `${i}`,
          `Зеркало с LED подсветкой D${i}`,
          `description ${i}`,
          [
            "https://styleroom.com.ua/wp-content/uploads/2020/02/097-6.jpg",
            "https://styleroom.com.ua/wp-content/uploads/2019/11/071-2.jpg",
            "https://styleroom.com.ua/wp-content/uploads/2019/11/071-6.jpg",
            "https://styleroom.com.ua/wp-content/uploads/2019/11/071-3.jpg",
          ],
          "1",
          new ProductSize(`${10 * i}`, "20", `${30 + i}`),
          productParts,
          productOptions,
          100 * i
        )
      );
    }
    return Promise.resolve(result);
  }
}
