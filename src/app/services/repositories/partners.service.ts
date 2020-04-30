import { Injectable } from "@angular/core";
import { DataService } from "./data-service";
import { SettingsService } from "../settings.service";
import { HttpClient } from "@angular/common/http";
import { DictionaryService } from "../dictionary.service";

export class Partner {
  public imageUrls: string[] = [];
  public regionName: string;

  constructor(
    public id: string,
    public name: string,
    public region: number,
    public city: string,
    public address: string,
    public contacts: string,
    public imageUrl: string
  ) {
    this.imageUrls = [imageUrl];
  }

  static clone(source: Partner): Partner {
    return new Partner(
      source.id,
      source.name,
      source.region,
      source.city,
      source.address,
      source.contacts,
      source.imageUrl
    );
  }
}

@Injectable({
  providedIn: "root",
})
export class PartnersService implements DataService<Partner> {
  private endpoint: string = "";
  private endpointName: string = "partner";
  constructor(
    private settings: SettingsService,
    private client: HttpClient,
    private dictionaryService: DictionaryService
  ) {
    this.endpoint = `${this.settings.apiUrl}/${this.endpointName}`;
  }
  createItem(data: Partner) {
    return this.client.post(this.endpoint, data).toPromise();
  }

  editItem(data: Partner) {
    return this.client.put(this.endpoint, data).toPromise();
  }

  deleteItem(id: string) {
    return this.client.delete(`${this.endpoint}/${id}`).toPromise();
  }

  getItems(): Promise<Partner[]> {
    return this.client
      .get(this.endpoint)
      .toPromise()
      .then((items) => {
        return items["map"]((item) => {
          let partner = new Partner(
            item.id,
            item.name,
            ++item.region,
            item.city,
            item.address,
            item.contacts,
            item.imageUrl
          );
          partner.regionName = this.dictionaryService.regionaMap[
            partner.region
          ];
          return partner;
        });
      });
  }
}
