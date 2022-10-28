import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Product [] = []

  totalPrice : number = 0
  constructor(private storeService : StoreService, private route : Router ) {

   }

  ngOnInit(): void {

    this.cart = this.storeService.cartList
    for(let product of this.cart){
      if(product.amount){
        this.totalPrice += product.price * product.amount
      }
    }
  }


  updateCart(product?: Product){
      this.totalPrice = 0

      this.cart = this.cart.filter(p => p.amount !== 0)
      this.storeService.updateCart(this.cart)
      for(let p of this.cart){
        if(product)
        {
          if(p.id === product.id)
          {
            p.amount = product.amount
          }
        }
        if(p.amount)
        {

          this.totalPrice += p.amount * p.price
        }
    }

  }


  // checkOut(){
  //   this.storeService.updateCart()
  // }
}
