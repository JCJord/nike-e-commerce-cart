import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [ShoppingListComponent, ShoppingItemComponent, FilterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ShoppingListComponent,ShoppingItemComponent, FilterComponent]
})
export class ShoppingModule { }
