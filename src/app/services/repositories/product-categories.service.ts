import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export class ProductCategory {
  constructor(
    public id: string,
    public name: string,
    public imageUrls: string[]
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class ProductCategoriesService {
  constructor() {}

  getItems() {
    // TODO: implement data loading
    var result = [];
    for (var i = 0; i < 10; i++) {
      result.push(
        new ProductCategory(`${i + 1}`, `category ${i + 1}`, [
          "https://styleroom.com.ua/wp-content/uploads/2019/12/404_1-300x300.jpg"
        ])
      );
    }
    return new BehaviorSubject(result);
  }
}
