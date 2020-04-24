import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  public baseUrl = "http://localhost:8080";
  public apiUrl = `${this.baseUrl}/api`;
  public imagesUrl = `${this.baseUrl}/images`;
  public currency = "грн.";
  constructor() {}

  public buildImageUrl(imageId) {
    return `${this.imagesUrl}/${imageId}`;
  }
}
