import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-desktop-nav',
  templateUrl: './desktop-nav.component.html',
  styleUrls: ['./desktop-nav.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '250px',
      })),
      state('closed', style({
        height: '*',
      })),
      transition('closed => open', animate('200ms ease-in-out')),
      transition('open => closed', animate('200ms ease-in-out')),
    ]),
  ],
})
export class DesktopNavComponent implements OnInit {
  
  @Output()
  isSearching = new EventEmitter<boolean>();
  
  focusSearchOn = false;
  linksReadyToAppear = true;
  closeButtonReadyToAppear = false;

  constructor() { }

  ngOnInit(): void {
  }

  focusInput() {    
    this.focusSearchOn = true;
    this.linksReadyToAppear = false;
    setTimeout(()=>{
      this.closeButtonReadyToAppear = true;
    },300);
    setTimeout(() => {
      this.isSearching.emit(true);;
    },196);
    
  }

  closeSearchInput() {
    this.focusSearchOn = false;
    this.closeButtonReadyToAppear = false;
    this.isSearching.emit(false);
    setTimeout(() => {
      this.linksReadyToAppear = true;
    },199);
  }
}
