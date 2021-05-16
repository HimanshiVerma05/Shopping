import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { UserDataService } from './services/user-data.service';
import { UserAuthService } from './services/user-auth.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './layout/components/product/product.component';


//For internationalization
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    
    AppComponent
    
    
    
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
    FormsModule,
    
    
    //for internationalization 
    TranslateModule.forRoot({
      loader: {
        provide : TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps : [HttpClient]
      }
    })
    
    
  ],
 
  providers: [CartService,ProductService,UserDataService,UserAuthService],
  bootstrap: [AppComponent]

})
export class AppModule { }
