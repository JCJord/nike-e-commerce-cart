import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ShoppingItemComponent } from './Components/shopping-item/shopping-item.component'
import { HomeComponent } from './Pages/home/home.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: ShoppingItemComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
