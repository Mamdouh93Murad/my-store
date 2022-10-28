import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : any

  id : any = 0

  constructor(private storeService : StoreService, private route : ActivatedRoute) {
  }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.product = this.storeService.getProduct(Number(this.id))

  }

  // update(id : number, amount: number) : void{
  //   this.storeService.updateList(id, amount)
  //   }
  addCart(product : Product){
    if(!product.amount)
    {
      alert('Please Choose Amount')
    }
    else{
      this.storeService.addCart(product)
    }
  }
}
