import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { SettingsFilterComponent } from '../settings-filter/settings-filter.component';
import { SwiperModule } from 'swiper/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CepCalculatorComponent } from '../cep-calculator/cep-calculator.component';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingItemComponent, FilterComponent, SettingsFilterComponent, CepCalculatorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SwiperModule,
    RouterTestingModule,
  ],
  exports:[ShoppingListComponent,ShoppingItemComponent, FilterComponent, SettingsFilterComponent, CepCalculatorComponent]
})
export class ShoppingModule { }
