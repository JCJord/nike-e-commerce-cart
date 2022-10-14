import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectedShoes } from './Components/shopping/shopping-item/selected-item.model';
import { CartServiceService } from './Services/cart-service.service';

interface AppState {
  message: boolean;
  cart: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cartItems!: Array<selectedShoes>;
  focus$!: Observable<boolean>;
  cartMenu$!: Observable<boolean>;
  title = 'nike-cart';
  isSearching!: boolean;
  isShopping!: boolean;
  subTotal = 0;
  
  constructor(private store: Store<AppState>, public router: Router, private cart: CartServiceService){
    this.cartMenu$ = this.store.select('cart');
    this.focus$ = this.store.select('message');

    this.focus$.subscribe((menuState: boolean) => {
      this.isSearching = menuState;
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
  }

  calcSubTotal() {
    let valueCounter = 0;
    this.cartItems.forEach((item)=>{

      valueCounter += item.total_value;

    })
    this.subTotal = valueCounter;
    console.log(valueCounter)
  }

  finishShopping() {
    this.unfocusCartMenu();
    this.router.navigate(['/cart']);
  }

  removeFromCart(id:any) {
    this.cart.removeShoeById(id);
    this.cartItems.length == 0 ? this.unfocusCartMenu() : null;
  }
}
