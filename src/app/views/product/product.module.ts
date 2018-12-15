import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ProductRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ReactiveFormsModule
  ],
  declarations: [ ProductComponent ]
})
export class ProductModule { }
