import { Component, OnInit } from '@angular/core';
import { Shoes } from 'src/app/Components/shopping/shoes.model';
import { ShoppingListService } from 'src/app/Services/shopping-list-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shoes!: Shoes[];
  shoesAmount!: number;
  
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.getShoes().subscribe((shoes: Shoes[]) => {
      this.shoes = shoes;
    })
    this.shoesAmount = this.shoppingListService.getAmountOfShoes();
  }
}
