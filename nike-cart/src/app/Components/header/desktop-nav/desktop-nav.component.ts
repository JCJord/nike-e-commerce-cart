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
  ],
})
export class DesktopNavComponent implements OnInit {
  
  focusSearchOn = false;
  headerReadyForTransition = false;

  constructor() { }

  ngOnInit(): void {
  }

  focusInput() {    
    this.focusSearchOn = !this.focusSearchOn;

    setTimeout(()=>{
      this.headerReadyForTransition = !this.headerReadyForTransition;
    },400)
  }

  waitAnimation() {

  }

}
