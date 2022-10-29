import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingComponent } from './shopping.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ShoppingComponent, ShoppingListComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[ShoppingComponent, ShoppingListComponent]
})
export class ShoppingModule { }
