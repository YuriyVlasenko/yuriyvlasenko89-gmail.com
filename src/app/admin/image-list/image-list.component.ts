import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit {
  @Input('images') images: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  onUpload(fileName: string) {
    console.log(fileName);
  }
}
