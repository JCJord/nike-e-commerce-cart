import { Component, OnInit } from '@angular/core'
import { Shoes } from './shoes.model'
import { ShoppingListService } from './shopping-list-service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoes!: Shoes[]
  shoesAmount!: number

  constructor (private shoppingListService: ShoppingListService) {}

  ngOnInit (): void {
    this.shoes = this.shoppingListService.getShoes()
    this.shoesAmount = this.shoppingListService.getAmountOfShoes()
  }
}
