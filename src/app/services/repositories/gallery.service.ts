import { Injectable } from "@angular/core";

export class Gallery {
  constructor(
    public id: string,
    public name: string,
    public imageUrl: string
  ) {}
}

@Injectable({
  providedIn: "root",
})
export class GalleryService {
  constructor() {}

  getItems(): Promise<Gallery[]> {
    // TODO: implement data loading
    var result = [];
    for (var i = 0; i < 15; i++) {
      result.push(
        new Gallery(
          `${i + 1}`,
          `Gallery ${i + 1}`,
          "https://styleroom.com.ua/wp-content/uploads/2019/12/404_1-300x300.jpg"
        )
      );
    }
    return Promise.resolve(result);
  }
  onEdit(item) {
    console.log("edit", item);
  }
  onRemove(item) {
    console.log("remove", item);
  }
  onCreate(item) {
    console.log("create", item);
  }
}
