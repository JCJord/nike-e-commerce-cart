import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ShoppingListComponent, ShoppingItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ShoppingListComponent,ShoppingItemComponent]
})
export class ShoppingModule { }
