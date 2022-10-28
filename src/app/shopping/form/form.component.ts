import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Form } from 'src/app/form';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form : Form;
  @Input() cart : any
  constructor(private storeService : StoreService) {
    this.form = {
      name : '',
      address : '',
      card : ''
    }

   }

  ngOnInit(): void {

  }
  updateForm(){
    this.storeService.form = this.form
  }

}
