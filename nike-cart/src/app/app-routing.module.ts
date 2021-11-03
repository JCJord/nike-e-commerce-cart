import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ShoppingItemComponent } from './shopping-item/shopping-item.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: ShoppingItemComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
