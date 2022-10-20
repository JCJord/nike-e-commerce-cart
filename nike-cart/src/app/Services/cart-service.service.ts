import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Shoes } from 'src/app/Components/shopping/shoes.model';
import { selectedShoes } from '../Components/shopping/shopping-item/selected-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  shoesInCart: selectedShoes[] = [];
  cartShoes$: Subject<selectedShoes[]> = new BehaviorSubject(this.shoesInCart);
  
  constructor() { }

  addShoes(shoe: selectedShoes) {
    const isAlreadyIn = this.shoesInCart.find(items => items.name === shoe.name && items.selectedSize === shoe.selectedSize);
    
    if(isAlreadyIn) {
      for(let item of this.shoesInCart) {
        if(item.name === shoe.name && item.selectedSize === shoe.selectedSize){
          item.amount++;
          item.total_value += item.price;
        }
      }
    }else {
      this.shoesInCart.forEach((item) => {
        if(item.id === shoe.id) {
          const uniqId = 'id' + (new Date()).getTime();
          shoe.id = uniqId;
        }
      })
      this.setItems(shoe);
    }
  }

  getItems() {
    return this.cartShoes$;
  }

  setItems(shoe: selectedShoes){
    this.shoesInCart.push(shoe);
    this.cartShoes$.next(this.shoesInCart);
  }

  removeShoeById(id:number | string) {
    this.shoesInCart = this.shoesInCart.filter(shoes => shoes.id != id);
    this.cartShoes$.next(this.shoesInCart);
  }

}
