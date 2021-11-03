import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { MobileNavComponent } from './header/mobile-nav/mobile-nav.component'
import { CarouselComponent } from './main-carousel/carousel/carousel.component'
import { DesktopNavComponent } from './header/desktop-nav/desktop-nav.component'
import { MainCarouselComponent } from './main-carousel/main-carousel.component'
import { HomeComponent } from './home/home.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { FilterComponent } from './filter/filter.component'
import { ShoppingListService } from './shopping-list/shopping-list-service'
import { ShoppingItemComponent } from './shopping-item/shopping-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileNavComponent,
    CarouselComponent,
    DesktopNavComponent,
    MainCarouselComponent,
    HomeComponent,
    ShoppingListComponent,
    FilterComponent,
    ShoppingItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
