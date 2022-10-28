import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CartComponent } from './Pages/cart/cart.component'
import { ItemComponent } from './Pages/item/item.component'
import { ShoppingItemComponent } from './Pages/item/shopping-item/shopping-item.component'


const routes: Routes = [
  { path: 'cart', component: CartComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
