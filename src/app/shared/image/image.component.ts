import { Component, OnInit, Input, OnChanges } from '@angular/core';
const DEFAULT_IMAGE = 'noImage.png';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  host: { class: 'image' },
})
export class ImageComponent implements OnInit, OnChanges {
  @Input('src') src: string[];
  public imageSrc: string = DEFAULT_IMAGE;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.src && this.src.length) {
      this.imageSrc = this.src[0];
      return;
    }
    this.imageSrc = DEFAULT_IMAGE;
  }
}
