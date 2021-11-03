import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Shoes } from '../shopping-list/shoes.model'
import { ShoppingListService } from '../shopping-list/shopping-list-service'

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
    private route: ActivatedRoute
  ) {}

  ngOnInit (): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.item = this.shoppingListService.getItem(this.id)
    })
  }
}
