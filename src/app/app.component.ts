import { Component } from '@angular/core';
import { Product } from './product';
import { StoreService } from './services/store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-store';

  constructor(private storeService : StoreService) { }
  ngOnInit(): void {

  }
}
