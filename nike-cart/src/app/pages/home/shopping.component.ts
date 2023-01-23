import { Component, OnInit } from '@angular/core';
import { Shoes } from 'src/app/entities/shoes.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list-service';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  shoes!: Shoes[];
  shoesAmount!: number;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.getShoes();
  }

  getShoes() {
    this.shoppingListService.getShoes().subscribe((shoes: Shoes[]) => {
      this.shoes = shoes;
    });
  }
}
