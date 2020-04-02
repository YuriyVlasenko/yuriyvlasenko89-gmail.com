import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export class ProductOption {
  constructor(public id: string, public name: string) {}
}

@Injectable({
  providedIn: "root"
})
export class ProductOptionsService {
  constructor() {}

  getItems() {
    // TODO: implement data loading
    var result = [
      new ProductOption("1", "Выключатель сенсорный — на касание."),
      new ProductOption("2", "Выключатель инфракрасный — на движение руки."),
      new ProductOption("3", "Индивидуальный размер.")
    ];
    return new BehaviorSubject(result);
  }
}
