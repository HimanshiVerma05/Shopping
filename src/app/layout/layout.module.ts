import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { MainPageComponent } from './components/main-page/main-page.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { QuantityControlModule } from '../quantity-control/quantity-control.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [LoginPageComponent, MainPageComponent, 
     SearchComponent ,ProductComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    SharedModule,
    QuantityControlModule,
    TranslateModule
    
    
  ]
   
})
export class LayoutModule { }
