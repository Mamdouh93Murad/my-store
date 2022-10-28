import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  cart : any;
  form : any;
  empty : any
  totalPrice : number = 0
  constructor(private storeService : StoreService) { }

  ngOnInit(): void {
    this.cart = this.storeService.cartList
    for(let product of this.cart){
      this.totalPrice += product.price * product.amount
    }
    this.form = this.storeService.form
  }

  refresh(){
    this.storeService.cartList = []
    this.storeService.form = {name : '', address : '', credit : 0}

  }
}
