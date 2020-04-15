import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  public apiUrl = "http://localhost:8080/api";
  constructor() {}
}
