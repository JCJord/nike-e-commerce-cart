import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { SettingsFilterComponent } from '../settings-filter/settings-filter.component';


@NgModule({
  declarations: [ShoppingListComponent, ShoppingItemComponent, FilterComponent, SettingsFilterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ShoppingListComponent,ShoppingItemComponent, FilterComponent, SettingsFilterComponent]
})
export class ShoppingModule { }
