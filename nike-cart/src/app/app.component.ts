import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shoppingItem } from './entities/shopping-item.model';
import { CartServiceService } from './shared/services/cart-service.service';

interface AppState {
  message: boolean;
  cart: boolean;
  mobile: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cartItems!: Array<shoppingItem>;
  focus$!: Observable<boolean>;
  cartMenu$!: Observable<boolean>;
  mobileMenu$!: Observable<boolean>;
  title = 'nike-cart';
  isSearching!: boolean;
  isShopping!: boolean;
  mobileMenu!: boolean;
  subTotal = 0;

  constructor(private store: Store<AppState>, public router: Router, private cart: CartServiceService){
    this.cartMenu$ = this.store.select('cart');
    this.focus$ = this.store.select('message');
    this.mobileMenu$ = this.store.select('mobile');

    this.focus$.subscribe((menuState: boolean) => {
      this.isSearching = menuState;
    });

    this.mobileMenu$.subscribe((menuState: boolean) => {
      this.mobileMenu = menuState;
    });

    this.cartMenu$.subscribe((cartMenuState: boolean)=> {
      this.isShopping = cartMenuState;

      if(this.isShopping){
        this.calcSubTotal();
      }
    });
  }

  ngOnInit() {
    this.cart.getItems().subscribe((shoes)=>{
      this.cartItems = shoes;
    });
  }

  unfocusSearch() {
    this.store.dispatch({type: 'closed'});

  }

  unfocusCartMenu() {
    this.store.dispatch({type: 'hide_cart_menu'});
    this.store.dispatch({type: 'hide_mobile_menu'});
  }

  calcSubTotal() {
    let valueCounter = 0;
    this.cartItems.forEach((item)=>{

      valueCounter += item.total_value;

    })
    this.subTotal = valueCounter;
  }

  finishShopping() {
    this.unfocusCartMenu();
    this.router.navigate(['/cart']);
  }

  removeFromCart(id:any) {
    this.cart.removeShoeById(id);
    this.calcSubTotal();
  }
}
