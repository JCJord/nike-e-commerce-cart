import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  cart: boolean;
  mobile: boolean;
}
@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss', '../header.component.scss']
})
export class MobileNavComponent implements OnInit {
  focus$!: Observable<boolean>;
  mobileMenu$!: Observable<boolean>;
  isShopping!: boolean;
  menuActive!: boolean;
  constructor (private store: Store<AppState>,) {
    this.focus$ = this.store.select('cart');
    this.mobileMenu$ = this.store.select('mobile');

    this.focus$.subscribe((menuState)=>{
      this.isShopping = menuState;
    });

    this.mobileMenu$.subscribe((menuState)=>{
      this.menuActive = menuState;
    });
  }

  ngOnInit (): void {
    
  }

  focusCartMenu() {
    this.store.dispatch({ type: 'show_cart_menu'});
  }

  focusMobileMenu() {
    this.store.dispatch({type: 'show_mobile_menu'});
  }
}
