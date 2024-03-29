import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { CarouselModule } from './components/main-carousel/carousel.module';


import { cartMenuReducer, menuReducer, mobileMenuReducer } from './states/menu-reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemModule } from './pages/item/item.module';
import { ShoppingModule } from './pages/home/shopping.module';
import { ShoppingRoutingModule } from './pages/home/shopping-routing.module';
import { ItemRoutingModule } from './pages/item/item-routing.module';
import { CartModule } from './pages/cart/cart.module';
import { ShoppingListService } from './shared/services/shopping-list-service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ItemModule,
    ShoppingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ShoppingRoutingModule,
    CartModule,
    ItemRoutingModule,
    HeaderModule,
    CarouselModule,
    StoreModule.forRoot({message: menuReducer, cart: cartMenuReducer, mobile: mobileMenuReducer})
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
