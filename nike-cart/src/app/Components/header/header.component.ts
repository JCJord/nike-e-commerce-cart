import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output()
  isSearching = new EventEmitter<boolean>();

  constructor() { }
  
  ngOnInit(): void {
  }

  onSearchFocus(isSearching: boolean) {
   this.isSearching.emit(isSearching);
  }

}
