import { Injectable } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImageManagerService {
  private endpoint: string = '';
  constructor(
    private settings: SettingsService,
    private httpClient: HttpClient
  ) {
    this.endpoint = `${this.settings.apiUrl}/image`;
  }

  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    return this.sendToServer(formData).then((response) => {
      return response['body'];
    });
  }

  removeFile(imageUrl) {
    let paths = imageUrl.split('/') || [''];
    let imageId = paths[paths.length - 1];
    return this.httpClient
      .delete<any>(`${this.endpoint}/${imageId}`)
      .toPromise();
  }

  private sendToServer(formData) {
    return this.httpClient
      .post<any>(this.endpoint, formData, {
        reportProgress: true,
        observe: 'events',
      })
      .toPromise();
  }
}
