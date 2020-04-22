import { Component, OnInit } from '@angular/core';
import { PartnersManagerService } from '../services/data-managers/partners-manager.service';
import { Partner } from '../services/repositories/partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  private allPartners: Partner[] = [];
  private currentRegion: string;
  public partners: Partner[] = [];
  public regions: String[] = [];
  public cities: String[] = [];
  constructor(private partnersManager: PartnersManagerService) {}

  ngOnInit(): void {
    this.partnersManager
      .getPartners()
      .then((partners) => {
        console.log('partners', partners);
        this.partners = partners;
        this.allPartners = partners;
        return this.partnersManager.getPartnersRegions();
      })
      .then((regions) => {
        console.log('regions', regions);
        this.regions = regions;
      });
  }

  onRegionChanged(region) {
    this.currentRegion = region;
    this.partnersManager.getPartnerRegionCities(region).then((cities) => {
      this.cities = cities;
    });
    this.partners = this.filterPartners(this.currentRegion, null);
  }

  onCityChanged(city) {
    this.partners = this.filterPartners(this.currentRegion, city);
  }

  filterPartners(region: string, city: string) {
    if (!region && !city) {
      return this.allPartners;
    }
    let filteredItems = this.allPartners;
    if (region) {
      filteredItems = filteredItems.filter((partner) => {
        return partner.region.toLowerCase() === region.toLowerCase();
      });
    }
    if (city) {
      filteredItems = filteredItems.filter((partner) => {
        return partner.city.toLowerCase() === city.toLowerCase();
      });
    }
    return filteredItems;
  }
}
