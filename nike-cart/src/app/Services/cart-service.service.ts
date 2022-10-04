import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoes } from 'src/app/Components/shopping/shoes.model';
import { selectedShoes } from '../Components/shopping/shopping-item/selected-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  shoesInCart: selectedShoes[] = [];

  constructor() { }

  addShoes(shoe: selectedShoes) {
    this.shoesInCart.push(shoe);
  }

  getItems() {
    return this.shoesInCart;
  }

}
