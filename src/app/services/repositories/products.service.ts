import { Injectable } from "@angular/core";
import { DataService } from "./data-service";
import { SettingsService } from "../settings.service";
import { HttpClient } from "@angular/common/http";
import { ProductCategoriesService } from "./product-categories.service";

export class ProductSize {
  constructor(
    public width: string,
    public height: string,
    public length: string
  ) {}

  static clone(source: ProductSize): ProductSize {
    return new ProductSize(source.width, source.height, source.length);
  }
}

export class Product {
  public category: string;
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public categoryId: string,
    public price: number,
    public imageUrls: string[],
    public size: ProductSize,
    public parts: string[],
    public options: string[]
  ) {}

  static clone(source: Product): Product {
    return new Product(
      source.id,
      source.title,
      source.description,
      source.categoryId,
      source.price,
      [...source.imageUrls],
      ProductSize.clone(source.size),
      [...source.parts],
      [...source.options]
    );
  }

  isMatchSearch(searchPhrase) {
    return (
      this.title.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      this.description.toLowerCase().includes(searchPhrase.toLowerCase())
    );
  }
}

@Injectable({
  providedIn: "root",
})
export class ProductsService implements DataService<Product> {
  private endpoint: string = "";
  private endpointName: string = "product";

  constructor(
    private settings: SettingsService,
    private client: HttpClient,
    private productCategoriesService: ProductCategoriesService
  ) {
    this.endpoint = `${this.settings.apiUrl}/${this.endpointName}`;
  }
  createItem(data: Product) {
    return this.client.post(this.endpoint, data).toPromise();
  }

  editItem(data: Product) {
    return this.client.put(this.endpoint, data).toPromise();
  }

  deleteItem(id: string) {
    return this.client.delete(`${this.endpoint}/${id}`).toPromise();
  }

  findItems(searchPhrase): Promise<Product[]> {
    // TODO: implement
    return this.getItems().then((products) => {
      return products.filter((product) => product.isMatchSearch(searchPhrase));
    });
  }
  /*
 source.id,
      source.title,
      source.description,
      source.categoryId,
      source.price,
      [...source.imageUrls],
      ProductSize.clone(source.size),
      [...source.parts],
      [...source.options]
*/

  getItems(): Promise<Product[]> {
    return this.client
      .get(this.endpoint)
      .toPromise()
      .then((items) => {
        return items["map"](
          (item) =>
            new Product(
              item.id,
              item.title,
              item.description,
              item.categoryId,
              item.price,
              item.imageUrls,
              item.size,
              item.parts,
              item.options
            )
        );
      });
  }
}
