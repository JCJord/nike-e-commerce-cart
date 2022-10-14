import { Component, OnInit } from '@angular/core';
import { Shoes } from 'src/app/Components/shopping/shoes.model';
import { selectedShoes } from 'src/app/Components/shopping/shopping-item/selected-item.model';
import { CartServiceService } from '../../Services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: selectedShoes[] = [];
  totalPrice = 0;
  initialValues: Array<number> = [];
  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.cartService.getItems().subscribe((shoes)=>{
      this.items = shoes;
    })
    for(let i of this.items){
      this.totalPrice += i.price;
    }

  }

  decreaseAmount(index: number) {
    if(this.items[index].amount > 1) {
      let { price } = this.items[index];
      this.items[index].amount--;
      this.items[index].total_value = this.items[index].total_value -price; 
    }
  }

  increaseAmount(index: number) {
    let { price } = this.items[index];
    this.items[index].total_value += price;
    this.items[index].amount++;
  }
}
