import { Injectable } from "@angular/core";
import { DataService } from "./data-service";
import { SettingsService } from "../settings.service";
import { HttpClient } from "@angular/common/http";

export class Gallery {
  public imageUrls: string[] = [];
  constructor(
    public id: string,
    public title: string,
    public order: number,
    public imageUrl: string
  ) {
    this.imageUrls = [imageUrl];
  }

  static clone(source: Gallery): Gallery {
    return new Gallery(source.id, source.title, source.order, source.imageUrl);
  }
}

@Injectable({
  providedIn: "root",
})
export class GalleryService implements DataService<Gallery> {
  private endpoint: string = "";
  private endpointName: string = "gallery";

  constructor(private settings: SettingsService, private client: HttpClient) {
    this.endpoint = `${this.settings.apiUrl}/${this.endpointName}`;
  }
  createItem(data: Gallery) {
    return this.client.post(this.endpoint, data).toPromise();
  }

  editItem(data: Gallery) {
    return this.client.put(this.endpoint, data).toPromise();
  }

  deleteItem(id: string) {
    return this.client.delete(`${this.endpoint}/${id}`).toPromise();
  }

  getItems(): Promise<Gallery[]> {
    return this.client
      .get(this.endpoint)
      .toPromise()
      .then((items) => {
        console.log(items);
        return items["map"](
          (item) =>
            new Gallery(item.id, item.title, +item.order || 0, item.imageUrl)
        );
      });
  }
}
