import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SwiperModule } from 'swiper/angular';
import { CepCalculatorComponent } from '../Components/cep-calculator/cep-calculator.component';
;

@NgModule({
    declarations: [
        CepCalculatorComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SwiperModule,
        ReactiveFormsModule,
        RouterModule,
        RouterTestingModule
    ],
    exports:[
        ReactiveFormsModule,
        SwiperModule,
        ReactiveFormsModule,
        RouterModule,
        RouterTestingModule,
        CepCalculatorComponent
    ],
  })
  export class SharedModule { }
  