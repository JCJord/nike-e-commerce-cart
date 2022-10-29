import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { CartServiceService } from 'src/app/services/cart-service.service'
import { Shoes } from '../../../entities/shoes.model'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingListService } from '../../../services/shopping-list-service'
import SwiperCore, { SwiperOptions, Scrollbar } from 'swiper';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { shoppingItem } from '../../../entities/shopping-item.model';
import { Store } from '@ngrx/store';

SwiperCore.use([Scrollbar]);
interface AppState {
  cart: boolean;
}
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
    scrollbar: { hide: false, draggable: true },
    autoplay:true,
  };

  item!: Shoes;
  loaded = 0;
  selectedSize!: number;
  isLoading = true;
  descriptionToggler = true;
  isSizeInputValid = true;

  cepInfo = false;

  constructor (
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private cartService:CartServiceService,
    private store: Store<AppState>
  ) {
    setTimeout(()=> {
      window.scrollTo(0,0);
    },200)
  }

  ngOnInit (): void {
    this.route.params.subscribe((params: Params) => {
      let id  =+ params['id'];
      this.item = this.shoppingListService.getItem(id);
    });
  }

  addToCart() {
    if(this.cartForm.get('size')?.valid) {
      let cartItem: any = {...this.item};
      cartItem['selectedSize'] = this.selectedSize;
      cartItem['amount'] = 1;
      cartItem['total_value'] = this.item.price;
      this.cartService.addShoes(cartItem as shoppingItem);
      
      this.store.dispatch({type: "show_cart_menu"});
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
