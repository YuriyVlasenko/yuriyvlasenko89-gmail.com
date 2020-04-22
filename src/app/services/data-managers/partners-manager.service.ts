import { Injectable } from '@angular/core';
import { PartnersService, Partner } from '../repositories/partners.service';

export class PartnerRegion {
  constructor(public region: String, public cities: String[]) {}

  addCity(cityName) {
    this.cities.find((c) => c.toLowerCase() === cityName.lo);
  }
}

@Injectable({
  providedIn: 'root',
})
export class PartnersManagerService {
  private regionCityMap = null;
  constructor(private partnersService: PartnersService) {}

  getPartners(): Promise<Partner[]> {
    return this.partnersService.getItems();
  }

  getPartnersRegions() {
    if (this.regionCityMap) {
      return Promise.resolve(Object.keys(this.regionCityMap).sort());
    }
    return this.initPartnersRegions().then((regionsMap) => {
      return Object.keys(regionsMap).sort();
    });
  }

  getPartnerRegionCities(region: string) {
    if (!region) {
      return Promise.resolve([]);
    }
    let dataPromise;
    if (this.regionCityMap) {
      dataPromise = Promise.resolve(this.regionCityMap);
    } else {
      dataPromise = this.initPartnersRegions();
    }
    return dataPromise.then((regionCityMap) => {
      region = region.toLowerCase();
      let regionMap = regionCityMap[region];
      if (regionMap) {
        return Promise.resolve(Object.keys(regionMap));
      }
      return Promise.resolve([]);
    });
  }

  private initPartnersRegions() {
    return this.getPartners().then((partners) => {
      this.regionCityMap = {};
      partners.forEach((partner) => {
        let region = partner.region.toLowerCase();
        let city = partner.city.toLowerCase();
        this.regionCityMap[region] = this.regionCityMap[region] || {};
        this.regionCityMap[region][city] = true;
      });
      return this.regionCityMap;
    });
  }
}
