import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { FormsModule } from '@angular/forms';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { TranslateModule } from '@ngx-translate/core';

const components = [
  
  CheckoutPageComponent
]


@NgModule({
  declarations: [
    CheckoutPageComponent,
    OrderSuccessComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    TranslateModule
  ],
  exports: [
    components   
       
  ]
})
export class CheckoutModule { }
