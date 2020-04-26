import { Pipe, PipeTransform } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  constructor(private settings: SettingsService) {}
  transform(value: unknown, ...args: unknown[]): unknown {
    value = value || 0;
    return `${Number(value).toFixed(2)} ${this.settings.currency}`;
  }
}
