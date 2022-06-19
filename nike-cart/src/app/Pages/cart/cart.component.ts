import { Component, OnInit } from '@angular/core';
import { Shoes } from 'src/app/Components/shopping-list/shoes.model';
import { CartServiceService } from './cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items:Shoes[] = [];
  totalPrice = 0;
  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();

    for(let i of this.items){
      this.totalPrice += i.price;
      console.log(this.totalPrice)
    }
  }

}
