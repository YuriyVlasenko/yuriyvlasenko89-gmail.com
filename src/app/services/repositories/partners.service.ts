import { Injectable } from "@angular/core";

export class Partner {
  constructor(
    public id: string,
    public name: string,
    public address: string,
    public contacts: string,
    public city: string,
    public region: string,
    public imageUrl: string
  ) {}
}

@Injectable({
  providedIn: "root",
})
export class PartnersService {
  constructor() {}

  getItems(): Promise<Partner[]> {
    // TODO: implement data loading
    var result = [];
    for (var i = 0; i < 5; i++) {
      result.push(
        new Partner(
          `${i + 1}`,
          `partner ${i + 1}`,
          `address ${i + 1}`,
          `contacts ${i + 1}`,
          `city ${i + 1}`,
          `region ${i + 1}`,
          "https://styleroom.com.ua/wp-content/uploads/2019/12/404_1-300x300.jpg"
        )
      );
    }
    return Promise.resolve(result);
  }
}
