import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityControlComponent } from './components/quantity-control/quantity-control.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';



@NgModule({
  declarations: [
    QuantityControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterTestingModule
  ],
  exports :[
    QuantityControlComponent
  ]
})

export class QuantityControlModule { }
