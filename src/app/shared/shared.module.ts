import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CartModule } from '../cart/cart.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';




const components = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CartModule,
    TranslateModule,
    RouterTestingModule
     
  ],
  exports: [
    components,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class SharedModule { }
