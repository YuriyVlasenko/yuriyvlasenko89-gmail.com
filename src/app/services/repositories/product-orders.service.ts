import { Injectable } from "@angular/core";
import { SettingsService } from "./settings.service";
import { HttpClient } from "@angular/common/http";

export class OrderProduct {
  public total: number = 0;
  constructor(public id: string, public price: number, public count: number) {
    this.total = this.price * this.count;
  }
}

export class ProductOrder {
  constructor(
    public id: string,
    public buyer: string,
    public phone: string,
    public region: string,
    public city: string,
    public deliveryDepartment: string,
    public notes: string,
    public products: OrderProduct[]
  ) {}

  public isValid(): boolean {
    return Boolean(this.buyer && this.phone && this.region && this.city);
  }
  static clone(source: ProductOrder): ProductOrder {
    return new ProductOrder(
      source.id,
      source.buyer,
      source.phone,
      source.region,
      source.city,
      source.deliveryDepartment,
      source.notes,
      source.products
    );
  }
}

@Injectable({
  providedIn: "root",
})
export class ProductOrdersService {
  private endpoint: string = "";
  private endpointName: string = "order";

  constructor(private settings: SettingsService, private client: HttpClient) {
    this.endpoint = `${this.settings.apiUrl}/${this.endpointName}`;
  }
  createItem(data: ProductOrder) {
    return this.client.post(this.endpoint, data).toPromise();
  }
  editItem(data: ProductOrder) {
    return this.client.put(this.endpoint, data).toPromise();
  }
  deleteItem(id: string) {
    return this.client.delete(`${this.endpoint}/${id}`).toPromise();
  }
  getItems(): Promise<ProductOrder[]> {
    return this.client
      .get(this.endpoint)
      .toPromise()
      .then((items) => {
        return items["map"](
          (item) =>
            new ProductOrder(
              item.id,
              item.buyer,
              item.phone,
              item.region,
              item.city,
              item.deliveryDepartment,
              item.notes,
              item.products.map((product) => {
                new OrderProduct(
                  product["id"],
                  product["price"],
                  product["count"]
                );
              })
            )
        );
      });
  }
}
