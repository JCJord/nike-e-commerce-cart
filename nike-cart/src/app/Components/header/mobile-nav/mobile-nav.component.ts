import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingListService } from 'src/app/Services/shopping-list-service';

interface AppState {
  cart: boolean;
  mobile: boolean;
  message: boolean;
}
@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss', '../header.component.scss'],
})
export class MobileNavComponent implements OnInit {
  focus$!: Observable<boolean>;
  mobileMenu$!: Observable<boolean>;
  searchMenu$!: Observable<boolean>;
  isShopping!: boolean;
  menuActive!: boolean;
  isSearchActive!: boolean;
  constructor (private store: Store<AppState>, private shoppingListService: ShoppingListService) {
    this.focus$ = this.store.select('cart');
    this.mobileMenu$ = this.store.select('mobile');
    this.searchMenu$ = this.store.select('message');

    this.focus$.subscribe((menuState)=>{
      this.isShopping = menuState;
    });
    
    this.mobileMenu$.subscribe((menuState)=>{
      this.menuActive = menuState;
    });

    this.searchMenu$.subscribe((menuState)=>{
      this.isSearchActive = menuState;
    })
  }

  ngOnInit (): void {
    
  }

  focusCartMenu() {
    this.store.dispatch({ type: 'show_cart_menu'});
  }

  focusMobileMenu() {
    this.store.dispatch({type: 'show_mobile_menu'});
  }

  searchByName(name: string) {
    this.shoppingListService.filterShoesByName(name);
  }

  slideDownMenu() {
    this.store.dispatch({type: 'open'});
    this.isSearchActive = true;
  }
}
