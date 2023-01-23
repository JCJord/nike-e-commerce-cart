import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SwiperModule } from 'swiper/angular';
import { CepCalculatorComponent } from './components/cep-calculator/cep-calculator.component';
import { CarouselModule } from '../components/main-carousel/carousel.module';
import { FilterComponent } from './components/filter/filter.component';
import { SettingsFilterComponent } from './components/settings-filter/settings-filter.component';


@NgModule({
    declarations: [
        CepCalculatorComponent,
        FilterComponent,
        SettingsFilterComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SwiperModule,
        RouterModule,
        RouterTestingModule,
        CarouselModule
    ],
    exports:[
        ReactiveFormsModule,
        SwiperModule,
        ReactiveFormsModule,
        RouterModule,
        RouterTestingModule,
        CepCalculatorComponent,
        FilterComponent,
        SettingsFilterComponent,
        CarouselModule
    ],
  })
  export class SharedModule { }
