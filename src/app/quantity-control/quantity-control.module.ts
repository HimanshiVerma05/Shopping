import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityControlComponent } from './components/quantity-control/quantity-control.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QuantityControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports :[
    QuantityControlComponent
  ]
})

export class QuantityControlModule { }
