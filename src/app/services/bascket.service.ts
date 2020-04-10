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
  private onChangeHandlers = [() => this.recalculateTotals()];
  private totalPrice: number = 0;
  private totalCount: number = 0;

  constructor(private items: BascketItem[] = []) {
    this.notifyThatBasckerChanged()
  }

  private notifyThatBasckerChanged() {
    this.onChangeHandlers.forEach((handler) => handler());
  }

  public clear() {
    this.items = [];
    this.notifyThatBasckerChanged()
  }
  public getTotalPrice(): number {
    return this.totalPrice;
  }
  public getItems(): BascketItem[] {
    return [...this.items];
  }
  public getTotalCount() {
    return this.totalCount;
  }
  public addItem(product: Product, count: number) {
    let productItem = this.items.find((i) => i.product.id === product.id);
    if (productItem) {
      productItem.count += count;
    } else {
      this.items.push(new BascketItem(product, count));
    }
    this.notifyThatBasckerChanged()
  }
  public removeItem(productId: string) {
    this.items = this.items.filter((i) => i.product.id !== productId);
    this.notifyThatBasckerChanged()
  }
  public changeCount(productId: string, count: number) {
    this.items.find((i) => i.product.id === productId).count = count;
    this.notifyThatBasckerChanged()
  }
  public addOnChangeHandler(handler) {
    this.onChangeHandlers.push(handler);
    return () => {
      let index = this.onChangeHandlers.findIndex(handler);
      if (index != -1) {
        this.onChangeHandlers.splice(index, 1);
      }
    };
  }
  private recalculateTotals() {
    if (this.items.length === 0) {
      this.totalPrice = 0;
      this.totalCount = 0;
      return;
    }
    this.totalPrice = this.items
      .map((i) => i.getPrice())
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    this.totalCount = this.items
      .map((i) => i.count)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
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

  getBasket(): Promise<Bascket> {
    if (this.bascket) {
      return Promise.resolve(this.bascket);
    }
    let bascketRaw = this.localStorage.getItem(StorageKeys.BASCKET);
    return this.parseBascketFromStorageFormat(bascketRaw).then((bascket) => {
      this.bascket = bascket;
      this.bascket.addOnChangeHandler(() => this.saveBascket());
      return bascket;
    });
  }

  private saveBascket() {
    console.log('saveBascket', this.bascket);
    this.localStorage.setItem(
      StorageKeys.BASCKET,
      this.converBascketToStorageFormat(this.bascket)
    );
  }

  private parseBascketFromStorageFormat(rawData): Promise<Bascket> {
    if (!rawData || !rawData.items) {
      return Promise.resolve(new Bascket());
    }
    return this.productsService.getItems().then((products) => {
      let bascketItems = rawData.items
        .map((item) => {
          let product = products.find((p) => p.id === item.productId);
          return {
            product,
            count: item.count,
          };
        })
        .filter((item) => item.product)
        .map((item) => {
          return new BascketItem(item.product, item.count);
        });
      return new Bascket(bascketItems);
    });
  }

  private converBascketToStorageFormat(bascket: Bascket) {
    let formatedBascket = {
      items: bascket.getItems().map((item) => {
        return {
          productId: item.product.id,
          count: item.count,
        };
      }),
    };
    return formatedBascket;
  }
}
