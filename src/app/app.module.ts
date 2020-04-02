import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { LogoComponent } from './shared/logo/logo.component';
import { MenuLinksComponent } from './shared/menu-links/menu-links.component';
import { SearchComponent } from './header/search/search.component';
import { MainComponent } from './main/main.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ContanctsComponent } from './contancts/contancts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PartnersComponent } from './main/partners/partners.component';
import { BascketInfoComponent } from './header/bascket-info/bascket-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    LogoComponent,
    MenuLinksComponent,
    SearchComponent,
    MainComponent,
    DeliveryComponent,
    ContanctsComponent,
    GalleryComponent,
    PartnersComponent,
    BascketInfoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
