import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shoes } from 'src/app/Components/shopping/shoes.model';
import { ShoppingListService } from '../../Services/shopping-list-service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  selectedFilter = 'Preço'

  @Input()
  shoes!: Shoes[];

  @Output()
  filteredShoes = new EventEmitter<Shoes[]>();

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.shoes.sort((a,b) => (a.price > b.price)? 1 : ((b.price > a.price) ? -1 : 0));
  }

  selectFilter(filter: string) {
    this.selectedFilter = filter;

    if(this.selectedFilter === 'Preço') {
      this.getShoes();
      this.shoes.sort((a,b) => (a.price > b.price)? 1 : ((b.price > a.price) ? -1 : 0));
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

  getShoes() {
    this.shoes = this.shoppingListService.getShoes();
  }
}
