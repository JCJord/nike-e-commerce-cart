import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/Services/shopping-list-service';
import { Shoes } from '../shopping/shoes.model';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {
  featuredShoes!: Shoes[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.featuredShoes = this.shoppingListService.getFeaturedItems();
  }

}
