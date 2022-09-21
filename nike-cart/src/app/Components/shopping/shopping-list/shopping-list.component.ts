import { Component, Input, OnInit } from '@angular/core'
import { Shoes } from '../shoes.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  @Input()
  shoes!: Shoes[];

  @Input()
  shoesAmount!: number;

  @Input()
  gridSize: number = 4;

  loaded = 0;
  isLoading = true;

  constructor () {}

  ngOnInit() {
    console.log(this.shoes)
  }
  filteredShoes(newShoes: Shoes[]) {
    this.shoes = newShoes;
  }

  selectedGrid(gridColSize: number) {
    this.gridSize = gridColSize;
    console.log(gridColSize);
  }

  gridStyles(gridColSize: number) {
    if(gridColSize == 2) {
      return 'grid-2';
    } 
    if(gridColSize == 3) {
      return 'grid-3';
    } else {
      return 'grid-4';
    }
  }

  onLoad() {
    this.loaded++;
    if(this.shoes.length == this.loaded){
      this.isLoading = false;
    }
  }

}
