import { Injectable } from "@angular/core";
import { SettingsService } from "./settings.service";
import { HttpClient } from "@angular/common/http";

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
  private endpoint: string = "";
  private endpointName: string = "productCategory";
  constructor(private settings: SettingsService, private client: HttpClient) {
    this.endpoint = `${this.settings.apiUrl}/${this.endpointName}`;
  }

  createItem(data: ProductCategory) {
    return this.client.post(this.endpoint, data).toPromise();
  }

  editItem(data: ProductCategory) {
    return this.client.put(this.endpoint, data).toPromise();
  }

  deleteItem(id: string) {
    return this.client.delete(`${this.endpoint}/${id}`).toPromise();
  }

  getItems(): Promise<ProductCategory[]> {
    return this.client
      .get(this.endpoint)
      .toPromise()
      .then((items) => {
        return items["map"](
          (item) =>
            new ProductCategory(item.id, item.title, item.name, item.imageUrl)
        );
      });
  }
}
