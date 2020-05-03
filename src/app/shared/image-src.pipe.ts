import { Pipe, PipeTransform } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Pipe({
  name: 'imageSrc',
})
export class ImageSrcPipe implements PipeTransform {
  constructor(private settings: SettingsService) {}
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      return this.settings.buildImageUrl(value);
    }
    return '../../assets/noImage.png';
  }
}
