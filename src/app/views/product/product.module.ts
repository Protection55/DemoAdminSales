import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    ProductRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ ProductComponent ]
})
export class ProductModule { }
