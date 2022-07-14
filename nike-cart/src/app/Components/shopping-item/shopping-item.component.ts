import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { CartServiceService } from 'src/app/Services/cart-service.service'
import { Shoes } from '../shopping-list/shoes.model'

import { ShoppingListService } from '../../Services/shopping-list-service'


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {
  item!: Shoes
  id!: number
  constructor (
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private cartService:CartServiceService
  ) {}

  ngOnInit (): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.item = this.shoppingListService.getItem(this.id)
    })
  }

  addToCart() {
    this.cartService.addShoes(this.item);
  }
}
