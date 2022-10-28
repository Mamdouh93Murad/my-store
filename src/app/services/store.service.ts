import { Injectable } from '@angular/core';
import { User } from '../login';
import { Product } from '../product';
import { Router } from '@angular/router';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  id : number = 0;
  exist : boolean = false
  userlist : User[] = []
  logged : boolean = false
  productList : Product [] = []
  taken : boolean = false
  cartList : Product [] = []
  product : any
  form : any;

  constructor(private router: Router, private http : HttpService) {
     this.http.getUsers().subscribe(users => {
      this.userlist = users
    })

    this.http.getData().subscribe(data => {
      this.productList = data
    })

    this.form = {
      name : undefined,
      address : undefined,
      card : undefined
    }
   }

   login(login : User){
    for(let user of this.userlist)
    {
    if(login.username === user.username && login.password === user.password){
        this.logged = true

      }
    }
    if(this.logged){
      this.router.navigate(['home'])
    }
    else{
      alert('Wrong Login Information')
    }
   }

   signup(user : User){
    for(let value of this.userlist){

      if(value.username === user.username){

        this.taken = true
      }
    }
    if(!this.taken){
      this.userlist.push(user)
      alert('Successfuly Signed Up, Please Login!')
    }
    else{
      alert('Username Taken, Please Insert Different Name')
    }
   }

  logout()
  {
    this.logged = false
    this.router.navigate([''])
  }

   getProduct(id : number) : Product {
    for(let p of this.productList){
      if(id === p.id){
        this.product = p
      }
    }
    return this.product
   }

   addCart(product : Product){

    for(let p of this.cartList)
    {
      if(p.id === product.id)
      {
        this.exist = true
        alert('Item Already in Cart!')
      }
    }
    if(!this.exist){
      this.cartList.push(product)
      alert('Cart Updated')
    }
   }

   updateCart(list : Product []){
      this.cartList = list

   }
}
