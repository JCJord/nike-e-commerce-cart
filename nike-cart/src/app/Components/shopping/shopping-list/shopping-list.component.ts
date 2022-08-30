import { Component, Input, OnInit } from '@angular/core'
import { Shoes } from '../shoes.model'

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

  @Input()
  gridSize: number = 4;
  constructor () {}
  
  ngOnInit (): void {
  }

  filteredShoes(newShoes: Shoes[]) {
    this.shoes = newShoes;
  }

  selectedGrid(gridColSize: number) {
    this.gridSize = gridColSize;
    console.log(gridColSize);
  }
}
