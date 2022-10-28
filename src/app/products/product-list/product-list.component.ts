import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/product';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList : Product [] = []
  logged : boolean = false
  totalPrice : number = 0
  constructor(private storeService : StoreService, private http : HttpService) {

  }

  ngOnInit(): void {
    this.http.getData().subscribe(data => {
      this.productsList = data
    })
    this.logged = this.storeService.logged
    this.update()
  }

  update(product?: Product){
      this.totalPrice = 0
      for(let p of this.productsList){
        if(product)
        {
          if(p.id === product.id)
          {
            p.amount = product.amount
          }
        }
        if(p.amount){
          this.totalPrice += p.amount * p.price
        }
      }
  }

}
