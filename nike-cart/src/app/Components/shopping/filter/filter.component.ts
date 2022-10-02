import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shoes } from 'src/app/Components/shopping/shoes.model';
import { ShoppingListService } from 'src/app/Services/shopping-list-service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  selectedFilter = 'Menor Preço'
  activeGrid!: number;
  filterIsActive = true;
  @Input()
  shoes!: Shoes[];

  @Output()
  selectedGrid = new EventEmitter<number>();

  @Output()
  showFilters = new EventEmitter<boolean>();

  constructor(private shoppingListService:ShoppingListService) { }

  selectFilter(filter: string) {
    this.selectedFilter = filter;
    this.shoppingListService.filterShoes(filter);
  }

  selectGridSize(gridColSize: number) {
    this.selectedGrid.emit(gridColSize);
    this.activeGrid = gridColSize;
  }

  toggleFilters() {
    this.filterIsActive = !this.filterIsActive;
    this.showFilters.emit(this.filterIsActive);
  }
}
