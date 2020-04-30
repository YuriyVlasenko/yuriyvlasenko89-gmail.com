import { Injectable } from '@angular/core';
import { KeyValue } from '@angular/common';
import { KeyValueMap } from './key-value-map';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  public regions: KeyValue<number, string>[] = [];
  public regionaMap = {};
  public orderStatuses: KeyValue<number, string>[] = [];
  public orderStatusesMap = {};
  constructor() {
    this.initRegions();
    this.initOrderStatuses();
  }

  private initOrderStatuses() {
    this.orderStatuses = [
      new KeyValueMap(1, 'новий'),
      new KeyValueMap(2, 'в роботі'),
      new KeyValueMap(3, 'виконаний'),
      new KeyValueMap(0, 'відхиленій'),
    ];
    this.orderStatuses.forEach((orderStatus) => {
      this.orderStatusesMap[orderStatus.key] = orderStatus.value;
    });
  }

  private initRegions() {
    this.regions = [
      new KeyValueMap(1, 'Вінницька'),
      new KeyValueMap(2, 'Волинська'),
      new KeyValueMap(3, 'Дніпропетровська'),
      new KeyValueMap(4, 'Донецька'),
      new KeyValueMap(5, 'Житомирська'),
      new KeyValueMap(6, 'Закарпатська'),
      new KeyValueMap(7, 'Запорізька'),
      new KeyValueMap(8, 'Івано-Франківська'),
      new KeyValueMap(9, 'Київська'),
      new KeyValueMap(10, 'Кіровоградська'),
      new KeyValueMap(11, 'Луганська'),
      new KeyValueMap(12, 'Львівська'),
      new KeyValueMap(13, 'Миколаївська'),
      new KeyValueMap(14, 'Одеська'),
      new KeyValueMap(15, 'Полтавська'),
      new KeyValueMap(16, 'Рівненська'),
      new KeyValueMap(17, 'Сумська'),
      new KeyValueMap(18, 'Тернопільська'),
      new KeyValueMap(19, 'Харківська'),
      new KeyValueMap(20, 'Херсонська'),
      new KeyValueMap(21, 'Хмельницька'),
      new KeyValueMap(22, 'Черкаська'),
      new KeyValueMap(23, 'Чернівецька'),
      new KeyValueMap(24, 'Чернігівська'),
    ];
    this.regions.forEach((region) => {
      this.regionaMap[region.key] = region.value;
    });
  }
}
