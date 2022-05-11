import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CarouselComponent } from './main-carousel/carousel/carousel.component'
import { MainCarouselComponent } from './main-carousel/main-carousel.component'
import { HomeComponent } from './home/home.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { FilterComponent } from './filter/filter.component'
import { ShoppingListService } from './shopping-list/shopping-list-service'
import { ShoppingItemComponent } from './shopping-item/shopping-item.component'
import { HeaderModule } from './header/header.module'

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MainCarouselComponent,
    HomeComponent,
    ShoppingListComponent,
    FilterComponent,
    ShoppingItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HeaderModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
