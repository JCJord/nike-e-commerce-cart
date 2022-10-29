import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CartComponent } from './pages/cart/cart.component'
import { ItemComponent } from './pages/item/item.component'
import { ShoppingItemComponent } from './pages/item/shopping-item/shopping-item.component'


const routes: Routes = [
  { path: 'cart', component: CartComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
