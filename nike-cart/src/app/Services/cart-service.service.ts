import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { shoppingItem } from '../Pages/item/shopping-item/shopping-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  shoesInCart: shoppingItem[] = [];
  cartShoes$: Subject<shoppingItem[]> = new BehaviorSubject(this.shoesInCart);
  
  constructor() { }

  addShoes(shoe: shoppingItem) {
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

  setItems(shoe: shoppingItem){
    this.shoesInCart.push(shoe);
    this.cartShoes$.next(this.shoesInCart);
  }

  removeShoeById(id:number | string) {
    this.shoesInCart = this.shoesInCart.filter(shoes => shoes.id != id);
    this.cartShoes$.next(this.shoesInCart);
  }

}
