import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartBaseComponent } from './cart-base/cart-base.component';
import { CartPopupComponent } from './cart-popup/cart-popup.component';
import { CartPageComponent } from './cart-page/cart-page.component';

import { FormsModule } from '@angular/forms';
import { CheckoutModule } from '../checkout/checkout.module';
import { QuantityControlModule } from '../quantity-control/quantity-control.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';



@NgModule({
  declarations: [CartBaseComponent, CartPageComponent, CartPopupComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    CheckoutModule,
    QuantityControlModule,
    TranslateModule
  ],
  exports: [
    CartBaseComponent, CartPageComponent, CartPopupComponent 
    ]
})
export class CartModule { }
