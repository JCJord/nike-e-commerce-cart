import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingListService } from 'src/app/Services/shopping-list-service';

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
  shoeName!:any;
  listItem = [
    {
      shoeSearch: 'Air Max'
    },
    {
      shoeSearch: 'Chuteira'
    },
    {
      shoeSearch: 'Winflo'
    },
    {
      shoeSearch: 'Kyrie Low'
    },

  ]
  
  focusSearchOn!:boolean;
  linksReadyToAppear = true;
  closeButtonReadyToAppear = false;

  constructor(private store: Store<AppState>, private shoppingListService: ShoppingListService, private router: Router) {
    this.focus$ = this.store.select('message');
    this.focus$.subscribe((menuState: boolean) => {
      this.focusSearchOn = menuState;

      if(menuState == false) {
          this.closeButtonReadyToAppear = false;
        setTimeout(() => {
          this.linksReadyToAppear = true;
          this.closeButtonReadyToAppear = false;
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

  searchItemByName(name: string) {
    this.store.dispatch({type: 'closed'});

    if(this.router.url != '/'){
      this.router.navigate(['/']);
    }

    setTimeout(()=>{
      this.shoppingListService.filterShoes(name);
    },140);
  }

  onSubmit() {
    this.store.dispatch({type:'closed'});
    setTimeout(()=>{
      this.shoppingListService.filterShoes(this.shoeName);
    },140);
  }
}
