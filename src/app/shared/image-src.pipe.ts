import { Pipe, PipeTransform } from '@angular/core';
import { SettingsService } from '../services/repositories/settings.service';

@Pipe({
  name: 'imageSrc',
})
export class ImageSrcPipe implements PipeTransform {
  constructor(private settings: SettingsService) {}
  transform(value: unknown, ...args: unknown[]): unknown {
    return this.settings.buildImageUrl(value);
  }
}
