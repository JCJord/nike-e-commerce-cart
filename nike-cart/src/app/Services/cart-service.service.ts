import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoes } from 'src/app/Components/shopping/shoes.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  shoesInCart: Shoes[] = [];

  constructor() { }

  addShoes(shoe: Shoes) {
    this.shoesInCart.push(shoe)
  }

  getItems() {
    return this.shoesInCart;
  }

}
