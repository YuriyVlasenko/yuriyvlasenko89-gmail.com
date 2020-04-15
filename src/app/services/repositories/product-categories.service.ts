import { Injectable } from "@angular/core";

export class ProductCategory {
  constructor(
    public id: string,
    public title: string,
    public name: string,
    public imageUrl: string
  ) {}

  static clone(source: ProductCategory): ProductCategory {
    return new ProductCategory(
      source.id,
      source.title,
      source.name,
      source.imageUrl
    );
  }
}

@Injectable({
  providedIn: "root",
})
export class ProductCategoriesService {
  constructor() {}

  getItems(): Promise<ProductCategory[]> {
    // TODO: implement data loading
    var result = [];
    for (var i = 0; i < 10; i++) {
      result.push(
        new ProductCategory(
          `${i + 1}`,
          `category ${i + 1}`,
          `category-${i + 1}`,
          "https://styleroom.com.ua/wp-content/uploads/2019/12/404_1-300x300.jpg"
        )
      );
    }
    return Promise.resolve(result);
  }
}
