import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { MainCarouselComponent } from './main-carousel.component';
import { CarouselComponent } from './carousel/carousel.component'

@NgModule({
  declarations: [MainCarouselComponent, CarouselComponent],
  imports: [
    CommonModule,
    SwiperModule,
  ],
  exports:[MainCarouselComponent,CarouselComponent]
})
export class CarouselModule { }
