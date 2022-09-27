import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nike-cart';

  isSearching = false;

  onSearchFocus(isSearching: boolean) {
    this.isSearching = isSearching;
  }
}
