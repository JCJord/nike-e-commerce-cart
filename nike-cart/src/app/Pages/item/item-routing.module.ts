import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';

export const routes: Routes = [
    { 
        path: 'item', component: ItemComponent,
        children: [
          {
            path: ':id', component: ShoppingItemComponent
          }
        ]
      },
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class ItemRoutingModule {}