import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './Components/header/header.module';
import { CarouselModule } from './Components/main-carousel/carousel.module';

import { ShoppingListService } from './Services/shopping-list-service';
import { CartComponent } from './Pages/cart/cart.component';
import { cartMenuReducer, menuReducer, mobileMenuReducer } from './States/menu-reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemModule } from './Pages/item/item.module';
import { ShoppingModule } from './Pages/home/shopping.module';
import { ShoppingRoutingModule } from './Pages/home/shopping-routing.module';
import { ItemRoutingModule } from './Pages/item/item-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule, 
    ItemModule,
    ShoppingModule,
    ReactiveFormsModule, 
    AppRoutingModule, 
    ShoppingRoutingModule,
    ItemRoutingModule,
    HeaderModule, 
    CarouselModule,
    StoreModule.forRoot({message: menuReducer, cart: cartMenuReducer, mobile: mobileMenuReducer})
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
