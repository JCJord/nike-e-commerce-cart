import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/shared/services/cart-service.service';

import { shoppingItem } from '../../entities/shopping-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: shoppingItem[] = [];
  initialValues: Array<number> = [];
  subTotal = 0;
  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartService.getItems().subscribe((shoes: shoppingItem[])=>{
      this.items = shoes;
    })
    this.calcSubTotal();
  }

  decreaseAmount(index: number) {
    if(this.items[index].amount > 1) {
      let { price } = this.items[index];
      this.items[index].amount--;
      this.items[index].total_value = this.items[index].total_value -price;
      this.calcSubTotal();
    }
  }

  increaseAmount(index: number) {
    let { price } = this.items[index];
    this.items[index].total_value += price;
    this.items[index].amount++;
    this.calcSubTotal();
  }

  calcSubTotal() {
    let valueCounter = 0;
    this.items.forEach((item)=>{
      valueCounter += item.total_value;
    })
    this.subTotal = valueCounter;
  }

  removeFromCart(id: number | string) {
    this.cartService.removeShoeById(id);
    this.calcSubTotal();
  }
}
