import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './Components/header/header.module';
import { CarouselModule } from './Components/main-carousel/carousel.module';

import { ShoppingListService } from './Services/shopping-list-service';
import { HomeComponent } from './Pages/home/home.component';
import { CartComponent } from './Pages/cart/cart.component';
import { ItemComponent } from './Pages/item/item.component'
import { ShoppingModule } from './Components/shopping/shopping.module';
import { menuReducer } from './States/menu-reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, CarouselModule, ShoppingModule, StoreModule.forRoot({message: menuReducer})],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
