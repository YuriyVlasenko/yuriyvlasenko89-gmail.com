import { Injectable } from '@angular/core';
import { Product, ProductsService } from './repositories/products.service';
import { LocalStorageService, StorageKeys } from './local-storage.service';

export class BascketItem {
  constructor(public product: Product, public count: number) {}

  public getPrice(): number {
    if (!this.product) {
      return 0;
    }
    return this.product.price * this.count;
  }
}

export class Bascket {
  constructor(private items: BascketItem[] = []) {}

  public getTotalPrice(): number {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items
      .map((i) => i.getPrice())
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  public getItems(): BascketItem[] {
    return [...this.items];
  }
  public getTotalCount() {
    return this.items.length;
  }
  public addItem(product: Product, count: number) {
    this.items.push(new BascketItem(product, count));
  }
  public removeItem(productId: string) {
    this.items = this.items.filter((i) => i.product.id !== productId);
  }
  public changeCount(productId: string, count: number) {
    this.items.find((i) => i.product.id === productId).count = count;
  }
}

@Injectable({
  providedIn: 'root',
})
export class BascketService {
  private bascket: Bascket;
  constructor(
    private localStorage: LocalStorageService,
    private productsService: ProductsService
  ) {}

  getBasket() {
    if (this.bascket) {
      return this.bascket;
    }
    let bascketRaw = this.localStorage.getItem(StorageKeys.BASCKET);
    if (!bascketRaw) {
      this.bascket = new Bascket();
      this.localStorage.setItem(StorageKeys.BASCKET, this.bascket);
    }
    // this.bascket = this.convertRawDataToBasket(bascketRaw);
    return this.bascket;
  }
  /*
  private converBascketToStorageFormat(bascket: Bascket) {
    let formatedBascket = {
      items: bascket.getItems().map((item) => {
        return {
          id: item.product.id,
          count: item.count,
        };
      }),
    };
    return formatedBascket;
  }

  private parseBascketFromStorageFormat(rawData): Promise<Bascket> {
    this.productsService.getItems()
    if (!rawData || !rawData.items) {
      return Promise.resolve(new Bascket());
    }

    return this.productsService.getItems().subscribe(() => {

    })

    let bascketItems = rawData.items.map((item) => {
      let product = new Product();
      return new BascketItem(product, item.count);
    });
  }

  private convertRawDataToBasket(rawBascket: Object): Bascket {
    let items = (rawBascket['items'] || []).map((item) => {
      return new BascketItem(new Product());
    });
    //let bascket = new Bascket();
  }
  */
}
