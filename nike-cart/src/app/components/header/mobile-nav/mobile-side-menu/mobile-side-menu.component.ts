import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ShoppingListService } from 'src/app/shared/services/shopping-list-service';

@Component({
  selector: 'app-mobile-side-menu',
  templateUrl: './mobile-side-menu.component.html',
  styleUrls: ['./mobile-side-menu.component.scss']
})
export class MobileSideMenuComponent implements OnInit {

  @Input()
  menuActive!: boolean;

  menuLinks = [
    {
      link: 'Mercurial',
    },
    {
      link: 'Blazer Low',
    },
    {
      link: 'Chinelo',
    },
    {
      link: 'Air',
    },
    {
      link: 'Kyrie',
    }
  ]

  constructor(private shoppingListService: ShoppingListService, private store: Store<boolean>, private router: Router) { }

  ngOnInit(): void {
  }

  searchShoeByName(name: string) {
    this.store.dispatch({type: "hide_mobile_menu"})
    this.router.navigate(['/']);
    this.shoppingListService.filterShoesByName(name);

  }

}
