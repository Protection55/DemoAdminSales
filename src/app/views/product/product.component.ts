import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  creditForm :FormGroup
  constructor(
    public fromBuilder:FormBuilder

  ) { 

    console.log('constructor')
  }
  
  ngOnInit() {
    console.log('Test NgOnint')
      this.creditForm = this.fromBuilder.group({
        credit_name :'',
      });

  }
  onClick(test: any){
    console.log('onClick')

  console.log(this.creditForm.value)

  }

}


