import { Injectable } from '@angular/core';
import { SettingsService } from '../services/repositories/settings.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImageManagerService {
  constructor(
    private settings: SettingsService,
    private httpClient: HttpClient
  ) {}

  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    return this.sendToServer(formData).then((response) => {
      let fileName = response['body'];
      return `${this.settings.imagesUrl}/${fileName}`;
    });
  }

  removeFile(imageId) {}

  private sendToServer(formData) {
    const serverUrl = `${this.settings.apiUrl}/image`;
    return this.httpClient
      .post<any>(serverUrl, formData, {
        reportProgress: true,
        observe: 'events',
      })
      .toPromise();
  }
}
