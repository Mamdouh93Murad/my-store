import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/product';
import { outputAst } from '@angular/compiler';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product : any
  @Output() changed : EventEmitter<Product> = new EventEmitter()

  isCart : boolean = false
  constructor(private storeService : StoreService ,private router : Router) { }

  ngOnInit(): void {
    this.isCart = this.router.url.includes('cart')
  }

  navigate(name : any){
      this.router.navigate([`details/${name}`])
  }

  addCart(product : Product){
    if(!product.amount)
    {
      alert('Please Choose Amount')
    }
    else{
      this.storeService.addCart(product)
    }
  }
  remove(){
    this.product.amount = 0
    this.changed.emit(this.product)
    alert(`${this.product.name} removed from cart`)
  }

  update(){
    this.changed.emit(this.product)
  }

}
