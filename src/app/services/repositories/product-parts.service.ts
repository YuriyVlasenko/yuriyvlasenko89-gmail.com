import { Injectable } from "@angular/core";

export class ProductPart {
  constructor(public id: string, public name: string) {}
}

@Injectable({
  providedIn: "root",
})
export class ProductPartsService {
  constructor() {}

  getItems() {
    // TODO: implement data loading
    var result = [
      new ProductPart("1", "Зеркальное полотно AGC Mirox Ecological"),
      new ProductPart("2", "Трансформатор 220В/12В"),
      new ProductPart("3", "Led подсветка"),
      new ProductPart("4", "Цвет свечения нейтральный белый"),
      new ProductPart("5", "Выключатель кнопочный."),
    ];
    return Promise.resolve(result);
  }
}
