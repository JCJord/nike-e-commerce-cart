import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, ShoppingListComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[HomeComponent, ShoppingListComponent]
})
export class ShoppingModule { }
