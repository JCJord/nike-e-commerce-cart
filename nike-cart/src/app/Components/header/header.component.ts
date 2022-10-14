import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
interface AppState {
  cart: boolean;
}@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartMenu$!: Observable<boolean>;

  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
  }

  focusCartMenu() {
    this.store.dispatch({type: 'show_cart_menu'});
  }
}
