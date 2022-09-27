import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: boolean;
}
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
  focus$!: Observable<boolean>;
  
  focusSearchOn!:boolean;
  linksReadyToAppear = true;
  closeButtonReadyToAppear = false;

  constructor(private store: Store<AppState>) {
    this.focus$ = this.store.select('message');

    this.focus$.subscribe((menuState: boolean)=>{
      this.focusSearchOn = menuState;

      if(menuState == false) {
        this.closeButtonReadyToAppear = false;
        setTimeout(() => {
          this.linksReadyToAppear = true;
        },199);
      }
    });

  }

  ngOnInit(): void {
  }

  focusInput() {    
    this.store.dispatch({type: "open"})
    this.linksReadyToAppear = false;
    setTimeout(()=>{
      this.closeButtonReadyToAppear = true;
    },300);
  }

  closeSearchInput() {
    this.store.dispatch({type: 'closed'});
    this.closeButtonReadyToAppear = false;
  }
}
