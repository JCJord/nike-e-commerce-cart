import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { MobileNavComponent } from './header/mobile-nav/mobile-nav.component'
import { CarouselComponent } from './header/carousel/carousel.component';
import { DesktopNavComponent } from './header/desktop-nav/desktop-nav.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileNavComponent,
    CarouselComponent,
    DesktopNavComponent,
    MainCarouselComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
