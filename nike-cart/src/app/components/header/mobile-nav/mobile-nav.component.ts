import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list-service';

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
export class MobileNavComponent {
  
  searchForm = new FormGroup({
    'search': new FormControl(null)
  });

  focus$!: Observable<boolean>;
  mobileMenu$!: Observable<boolean>;
  searchMenu$!: Observable<boolean>;
  isShopping!: boolean;
  menuActive!: boolean;
  isSearchActive!: boolean;
  
  constructor (private store: Store<AppState>, private shoppingListService: ShoppingListService, private router: Router) {
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

  focusCartMenu() {
    this.store.dispatch({ type: 'show_cart_menu'});
  }

  focusMobileMenu() {
    this.store.dispatch({type: 'show_mobile_menu'});
  }

  searchByName(name: string) {
    this.store.dispatch({type: 'closed'});
    setTimeout(()=> {
      this.shoppingListService.filterShoesByName(name);
    },140)
    this.router.navigate(['/']);
  }

  slideDownMenu() {
    this.store.dispatch({type: 'open'});
    this.isSearchActive = true;
  }
}
