import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
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
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
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

  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { ProductComponent: any }
