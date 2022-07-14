import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FilterComponent } from './Components/filter/filter.component'
import { HeaderModule } from './Components/header/header.module'
import { CarouselModule } from './Components/main-carousel/carousel.module'

import { ShoppingItemComponent } from './Components/shopping-item/shopping-item.component'
import { ShoppingListService } from './Components/shopping-list/shopping-list-service'
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component'
import { HomeComponent } from './Pages/home/home.component';
import { CartComponent } from './Pages/cart/cart.component';
import { ItemComponent } from './Pages/item/item.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingListComponent,
    FilterComponent,
    ShoppingItemComponent,
    CartComponent,
    ItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, CarouselModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
