import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartComponent } from './shopping/cart/cart.component';
import { ConfirmationComponent } from './shopping/confirmation/confirmation.component';
import { FormComponent } from './shopping/form/form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path: 'home', component : ProductListComponent},
  {path : 'cart', component : CartComponent},
  {path : 'details/:id', component : ProductDetailsComponent},
  {path : 'confirm', component : ConfirmationComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
