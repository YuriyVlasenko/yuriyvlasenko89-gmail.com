import { Injectable } from '@angular/core';
import { KeyValue } from '@angular/common';
import { KeyValueMap } from './key-value-map';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  public regions: KeyValue<number, string>[] = [];
  constructor() {}

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
  }
}
