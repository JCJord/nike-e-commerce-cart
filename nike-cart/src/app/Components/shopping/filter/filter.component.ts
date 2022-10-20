import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shoes } from 'src/app/Components/shopping/shoes.model';
import { ShoppingListService } from 'src/app/Services/shopping-list-service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        overflow: 'hidden',
        height: '*',
      })),
      state('closed', style({
        overflow: 'hidden',
        height: '0px',
      })),
      transition('closed => open', animate(`250ms ease-in-out`)),
      transition('open => closed', animate(`250ms ease-in-out`)),
    ]),
  ],
})
export class FilterComponent {
  selectedFilter = 'Maior Preço'
  activeGrid!: number;
  filterIsActive = true;
  isOpen!: boolean;

  @Input()
  shoes!: Shoes[];

  @Output()
  selectedGrid = new EventEmitter<number>();

  @Output()
  showFilters = new EventEmitter<boolean>();

  constructor(private shoppingListService:ShoppingListService) { }

  selectFilter(filter: string) {
    this.selectedFilter = filter;
    this.shoppingListService.filterShoesByName(filter);
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
