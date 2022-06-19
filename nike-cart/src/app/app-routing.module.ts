import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ShoppingItemComponent } from './Components/shopping-item/shopping-item.component'
import { CartComponent } from './Pages/cart/cart.component'
import { HomeComponent } from './Pages/home/home.component'
import { ItemComponent } from './Pages/item/item.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'item', component: ItemComponent,
    children: [
      {
        path: ':id', component: ShoppingItemComponent
      }
    ]
  },
  { path: 'cart', component:CartComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
