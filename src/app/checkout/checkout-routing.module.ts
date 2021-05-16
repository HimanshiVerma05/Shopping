import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from '../cart/cart-page/cart-page.component';
import { MainPageComponent } from '../layout/components/main-page/main-page.component';
import { AuthGuardGuard } from '../RoutingGuards/auth-guard.guard';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';

const routes: Routes = [
 
  { path: '', component: CheckoutPageComponent },
  { path: 'home', component: MainPageComponent   
},
{ path: 'cart', component: CartPageComponent ,canActivate: [AuthGuardGuard]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { 

  

}
