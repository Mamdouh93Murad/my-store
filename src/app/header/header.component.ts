import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../product';
import { StoreService } from '../services/store.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  list : Product [] = []
  total : number = 0
  constructor(public storeService : StoreService, public authService: AuthService,
    @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit(): void {

  }

  ngDoCheck(){
    this.total = 0
    if(this.list !== this.storeService.cartList){
      this.list = this.storeService.cartList
    }

    for(let product of this.list){
        if(product.amount){
          this.total += product.amount
        }
      }

    }

    logout(): void {
      // this.authService.logout({ returnTo: this.doc.location.origin });
      this.storeService.logged = false
    }

  }
