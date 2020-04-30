import { Injectable } from "@angular/core";
import { SettingsService } from "../settings.service";
import { HttpClient } from "@angular/common/http";
import { DictionaryService } from "../dictionary.service";

export class OrderProduct {
  public total: number = 0;
  constructor(public id: string, public price: number, public count: number) {
    this.total = this.price * this.count;
  }
}

export class ProductOrder {
  public statusName: string = "";
  public regionName: string = "";
  public total: number = 0;
  constructor(
    public id: string,
    public date: string,
    public buyer: string,
    public phone: string,
    public status: number,
    public region: number,
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
      source.date,
      source.buyer,
      source.phone,
      source.status,
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
  private;

  constructor(
    private settings: SettingsService,
    private client: HttpClient,
    private dictionaryService: DictionaryService
  ) {
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
        return items["map"]((item) => {
          let order = new ProductOrder(
            item.id,
            item.date,
            item.buyer,
            item.phone,
            item.status,
            ++item.region,
            item.city,
            item.deliveryDepartment,
            item.notes,
            item.products.map((product) => {
              return new OrderProduct(
                product["id"],
                product["price"],
                product["count"]
              );
            })
          );
          order.total = item.total;
          order.regionName = this.dictionaryService.regionaMap[item.region];
          order.statusName = this.dictionaryService.orderStatusesMap[
            item.status
          ];
          return order;
        });
      });
  }
}
