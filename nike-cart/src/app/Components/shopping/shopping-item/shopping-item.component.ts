import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { CartServiceService } from 'src/app/Services/cart-service.service'
import { Shoes } from '../shoes.model'

import { ShoppingListService } from '../../../Services/shopping-list-service'


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {
  item!: any
  id!: number
  loaded = 0;
  isLoading = true;
  constructor (
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private cartService:CartServiceService
  ) {}

  ngOnInit (): void {
    this.route.params.subscribe((params: Params) => {
      this.id =+ params['id']
      this.item = this.shoppingListService.getItem(this.id)
      console.log(this.id)

      console.log(this.item)
    })
  }

  addToCart() {
    this.cartService.addShoes(this.item);
  }

  onLoad() {
    this.loaded++;

    if(this.item.itemImgs.length == this.loaded){
      this.isLoading = false;
    }
  }
}
