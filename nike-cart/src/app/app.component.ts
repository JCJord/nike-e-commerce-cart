import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  focus$!: Observable<boolean>;
  title = 'nike-cart';
  isSearching!: boolean;

  constructor(private store: Store<AppState>){
    this.focus$ = this.store.select('message');

    this.focus$.subscribe((menuState: boolean) => {
      this.isSearching = menuState;
    })
  }

  onSearchFocus(isSearching: boolean) {
    this.isSearching = isSearching;
  }

  unfocusSearch() {
    this.store.dispatch({type: 'closed'});
  }
}
