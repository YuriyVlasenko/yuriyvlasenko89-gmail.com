import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  HttpClient,
  HttpEventType,
  HttpErrorResponse,
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SettingsService } from 'src/app/services/repositories/settings.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private settings: SettingsService
  ) {}
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  @Output('upload') upload = new EventEmitter<string>();
  files = [];

  ngOnInit(): void {}

  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.sendToServer(formData).then((response) => {
      this.upload.emit(response['body']);
    });
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      const file = fileUpload.files[0];
      this.uploadFile({ data: file, inProgress: false, progress: 0 });
    };
    fileUpload.click();
  }

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
