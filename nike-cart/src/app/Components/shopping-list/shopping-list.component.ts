import { Component, Input, OnInit } from '@angular/core'
import { Shoes } from './shoes.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  @Input()
  shoes!: Shoes[];

  @Input()
  shoesAmount!: number;

  constructor () {}

  ngOnInit (): void {
  }
}
