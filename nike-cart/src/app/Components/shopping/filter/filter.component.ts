import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shoes } from 'src/app/Components/shopping/shoes.model';
import { ShoppingListService } from 'src/app/Services/shopping-list-service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  selectedFilter = 'Menor Preço'
  activeGrid!: number;

  @Input()
  shoes!: Shoes[];

  @Output()
  filteredShoes = new EventEmitter<Shoes[]>();

  @Output()
  selectedGrid = new EventEmitter<number>();

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.getShoes();
    this.shoes.sort((a,b) => (a.price > b.price)? 1 : ((b.price > a.price) ? -1 : 0));
  }

  selectFilter(filter: string) {
    this.selectedFilter = filter;
    
    if(this.selectedFilter === 'Menor Preço') {
      this.getShoes();
      this.shoes.sort((a,b) => (a.price > b.price)? 1 : ((b.price > a.price) ? -1 : 0));
      this.filteredShoes.emit(this.shoes);
    }

    else if(this.selectedFilter === 'Maior Preço') {
      this.getShoes();
      this.shoes.sort((a,b) => (a.price < b.price)? 1 : ((b.price < a.price) ? -1 : 0));
      this.filteredShoes.emit(this.shoes);
    }

    else if(this.selectedFilter === 'Masculino') {
      this.getShoes();
      this.shoes = this.shoes.filter(filter => filter.gender === 'Masculino' || filter.gender === 'Unissex');
      this.filteredShoes.emit(this.shoes);
    }

    else if(this.selectedFilter === 'Lançamento') {
      this.getShoes();
      this.shoes = this.shoes.filter(filter => filter.release != false);
      this.filteredShoes.emit(this.shoes);
    } 
  }

  selectGridSize(gridColSize: number) {
    this.selectedGrid.emit(gridColSize);
    this.activeGrid = gridColSize;
  }

  getShoes() {
    this.shoes = this.shoppingListService.getShoes();
  }
}
