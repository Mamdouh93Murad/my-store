import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingModule } from './shopping/shopping.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule }from '@angular/material/autocomplete';
import {  MatButtonModule } from '@angular/material/button';
import {  MatCheckboxModule } from '@angular/material/checkbox';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import {  MatRadioModule } from '@angular/material/radio';
import {  MatSelectModule } from '@angular/material/select';
import {  MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatChipsModule} from '@angular/material/chips';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge'
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    ShoppingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatChipsModule,
    HttpClientModule,
    MatBadgeModule,
    AuthModule.forRoot({
      ...env.auth,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
