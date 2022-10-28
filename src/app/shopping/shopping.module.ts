import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule } from '@angular/material/button';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import {  MatSelectModule } from '@angular/material/select';
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card'
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [
    CartComponent,
    ConfirmationComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    RouterModule,
    BrowserModule,
    ProductsModule
  ]
})
export class ShoppingModule { }
