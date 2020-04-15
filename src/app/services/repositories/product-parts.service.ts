import { Injectable } from "@angular/core";
import { SettingsService } from "./settings.service";
import { HttpClient } from "@angular/common/http";

export class ProductPart {
  constructor(public id: string, public name: string) {}
}

@Injectable({
  providedIn: "root",
})
export class ProductPartsService {
  private endpoint: string = "";
  private endpointName: string = "productPart";
  constructor(private settings: SettingsService, private client: HttpClient) {
    this.endpoint = `${this.settings.apiUrl}/${this.endpointName}`;
  }

  getItems(): Promise<ProductPart> {
    return this.client
      .get(this.endpoint)
      .toPromise()
      .then((items) => {
        return items.map((item) => new ProductPart(item.id, item.name));
      });
  }
}
