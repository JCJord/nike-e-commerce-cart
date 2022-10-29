import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ItemRoutingModule } from './item-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ItemComponent,
    ShoppingItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule
  ],
  exports:[
    ItemComponent,
    ShoppingItemComponent,
    ItemRoutingModule
  ]
})
export class ItemModule { }
