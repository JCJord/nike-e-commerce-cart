import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FilterComponent } from './Components/filter/filter.component'
import { HeaderModule } from './Components/header/header.module'
import { CarouselComponent } from './Components/main-carousel/carousel/carousel.component'
import { MainCarouselComponent } from './Components/main-carousel/main-carousel.component'
import { ShoppingItemComponent } from './Components/shopping-item/shopping-item.component'
import { ShoppingListService } from './Components/shopping-list/shopping-list-service'
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component'
import { HomeComponent } from './Pages/home/home.component'


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
