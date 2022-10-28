import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SwiperModule } from 'swiper/angular';
import { CepCalculatorComponent } from '../Components/cep-calculator/cep-calculator.component';
import { FilterComponent } from '../Components/filter/filter.component';
import { CarouselModule } from '../Components/main-carousel/carousel.module';
import { SettingsFilterComponent } from '../Components/settings-filter/settings-filter.component';

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
  