import {
  Component,
  OnInit,
  Input,
  OnChanges,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';
import { EOPNOTSUPP } from 'constants';

export interface ImageListSettings {
  canDelete: boolean;
  canAdd: boolean;
}

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
  host: { class: 'image-list' },
})
export class ImageListComponent implements OnInit, OnChanges {
  @Input('images') images: string[] = [];
  @Input('settings') settings: ImageListSettings;
  @Output('remove') remove = new EventEmitter<number>();
  @Output('add') add = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}

  onUpload(fileName: string) {
    this.add.emit(fileName);
  }
  onRemove(index) {
    this.remove.emit(index);
  }
}
