import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

}
