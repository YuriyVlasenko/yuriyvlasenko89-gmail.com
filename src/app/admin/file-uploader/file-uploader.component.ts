import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { ImageManagerService } from '../image-manager.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  constructor(private imageManager: ImageManagerService) {}
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  @Output('upload') upload = new EventEmitter<string>();
  files = [];

  ngOnInit(): void {}

  uploadFile(file) {
    this.imageManager.uploadFile(file).then((fileName) => {
      this.upload.emit(fileName);
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
}
