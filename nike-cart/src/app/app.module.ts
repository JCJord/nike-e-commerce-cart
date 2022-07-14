import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FilterComponent } from './Components/filter/filter.component'
import { HeaderModule } from './Components/header/header.module'
import { CarouselModule } from './Components/main-carousel/carousel.module'

import { ShoppingListService } from './Services/shopping-list-service'
import { HomeComponent } from './Pages/home/home.component';
import { CartComponent } from './Pages/cart/cart.component';
import { ItemComponent } from './Pages/item/item.component'
import { ShoppingModule } from './Components/shopping/shopping.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    CartComponent,
    ItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, CarouselModule, ShoppingModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
