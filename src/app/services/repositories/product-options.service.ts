import { Injectable } from "@angular/core";
import { DataService } from "./data-service";
import { SettingsService } from "./settings.service";
import { HttpClient } from "@angular/common/http";

export class ProductOption {
  constructor(public id: string, public name: string) {}

  static clone(source: ProductOption): ProductOption {
    return new ProductOption(source.id, source.name);
  }
}

@Injectable({
  providedIn: "root",
})
export class ProductOptionsService implements DataService<ProductOption> {
  private endpoint: string = "";
  private endpointName: string = "productOption";

  constructor(private settings: SettingsService, private client: HttpClient) {
    this.endpoint = `${this.settings.apiUrl}/${this.endpointName}`;
  }

  createItem(data: ProductOption) {
    return this.client.post(this.endpoint, data).toPromise();
  }

  editItem(data: ProductOption) {
    return this.client.put(this.endpoint, data).toPromise();
  }

  deleteItem(id: string) {
    return this.client.delete(`${this.endpoint}/${id}`).toPromise();
  }

  getItems(): Promise<ProductOption[]> {
    return this.client
      .get(this.endpoint)
      .toPromise()
      .then((items) => {
        return items["map"]((item) => new ProductOption(item.id, item.name));
      });
  }
}
