import { Injectable } from "@angular/core";
import { SettingsService } from "../settings.service";
import { HttpClient } from "@angular/common/http";
import { DataService } from "./data-service";
import { ProductPartsDialogComponent } from "src/app/admin/admin-product-parts/product-parts-dialog/product-parts-dialog.component";

export class ProductPart {
  constructor(public id: string, public name: string) {}

  static clone(source: ProductPart): ProductPart {
    return new ProductPart(source.id, source.name);
  }
}

@Injectable({
  providedIn: "root",
})
export class ProductPartsService implements DataService<ProductPart> {
  private endpoint: string = "";
  private endpointName: string = "productPart";
  constructor(private settings: SettingsService, private client: HttpClient) {
    this.endpoint = `${this.settings.apiUrl}/${this.endpointName}`;
  }
  createItem(data: ProductPart) {
    return this.client.post(this.endpoint, data).toPromise();
  }

  editItem(data: ProductPart) {
    return this.client.put(this.endpoint, data).toPromise();
  }

  deleteItem(id: string) {
    return this.client.delete(`${this.endpoint}/${id}`).toPromise();
  }

  getItems(): Promise<ProductPart[]> {
    return this.client
      .get(this.endpoint)
      .toPromise()
      .then((items) => {
        return items["map"]((item) => new ProductPart(item.id, item.name));
      });
  }
}
