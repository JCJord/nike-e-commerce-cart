import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { SettingsFilterComponent } from '../settings-filter/settings-filter.component';
import { SwiperModule } from 'swiper/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [ShoppingListComponent, FilterComponent, SettingsFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SwiperModule,
    RouterTestingModule,
  ],
  exports:[ShoppingListComponent, FilterComponent, SettingsFilterComponent]
})
export class ShoppingModule { }
