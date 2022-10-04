import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { CartServiceService } from 'src/app/Services/cart-service.service'
import { Shoes } from '../shoes.model'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingListService } from '../../../Services/shopping-list-service'
import SwiperCore, { Navigation, SwiperOptions, Autoplay, Scrollbar } from 'swiper';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { selectedShoes } from './selected-item.model';

SwiperCore.use([Navigation, Autoplay, Scrollbar]);

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        overflow: 'hidden',
        height: '*',
      })),
      state('closed', style({
        overflow: 'hidden',
        height: '150px',
        
      })),
      transition('closed => open', animate('300ms ease-in-out')),
      transition('open => closed', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ShoppingItemComponent implements OnInit {
  cartForm = new FormGroup({
    'size': new FormControl(null, [Validators.required])
  });

  config: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  item!: Shoes;
  loaded = 0;
  selectedSize!: number;
  isLoading = true;
  descriptionToggler = true;
  isSizeInputValid = true;

  constructor (
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private cartService:CartServiceService,
    private router: Router
  ) {
    setTimeout(()=> {
      window.scrollTo(0,0);
    },200)
  }

  ngOnInit (): void {
    this.route.params.subscribe((params: Params) => {
      let id  =+ params['id'];
      this.item = this.shoppingListService.getItem(id);
    })
  }

  addToCart() {
    if(this.cartForm.get('size')?.valid) {

      let cartItem: any = this.item;
      cartItem['selectedSize'] = this.selectedSize;

      this.cartService.addShoes(cartItem);
      this.router.navigate(['/cart'])
      
    }else {
      this.isSizeInputValid = false;
    }
  }

  setSize (size: number) {
    this.selectedSize = size;
    if (!this.cartForm.get('size')?.valid){
      this.isSizeInputValid = true;
    }
  }

  onLoad() {
    this.loaded++;

    if(this.item.itemImgs.length == this.loaded){
      this.isLoading = false;
    }
  }
}
