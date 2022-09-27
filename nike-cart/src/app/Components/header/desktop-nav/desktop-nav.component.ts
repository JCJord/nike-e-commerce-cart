import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-desktop-nav',
  templateUrl: './desktop-nav.component.html',
  styleUrls: ['./desktop-nav.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '400px',
      })),
      state('closed', style({
        height: '*',
      })),
      transition('closed => open', animate('200ms ease-in-out')),
      transition('open => closed', animate('200ms ease-in-out')),
    ]),
    trigger('showHidden', [
      state('open', style({
        height: '0',
        width: '0',
        fontSize:'0',
      })),
      state('closed', style({
        width: '40px',
        height: '40px',
        fontSize:'32px',

      })),
      transition('closed => open', animate('0ms ease-in-out')),
      transition('open => closed', animate('200ms ease-in-out')),
    ]),
  ],
})
export class DesktopNavComponent implements OnInit {
  
  focusSearchOn = false;
  headerReadyForTransition = false;
  linksReadyToAppear = true;
  closeButtonReadyToAppear = false;
  constructor() { }

  ngOnInit(): void {
  }

  focusInput() {    
    this.focusSearchOn = true;
    this.linksReadyToAppear = false;
    this.closeButtonReadyToAppear = true;
    setTimeout(()=>{
      this.headerReadyForTransition = !this.headerReadyForTransition;
    },400)

    
  }

  closeSearchInput() {
    this.focusSearchOn = false;
    

    setTimeout(() => {
      this.linksReadyToAppear = true;
    },196)

  }

  waitAnimation() {

  }

}
