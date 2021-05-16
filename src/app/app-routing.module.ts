import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './cart/cart-page/cart-page.component';
import { CheckoutPageComponent } from './checkout/components/checkout-page/checkout-page.component';


import { LoginPageComponent } from './layout/components/login-page/login-page.component';
import { MainPageComponent } from './layout/components/main-page/main-page.component';
import { ProductComponent } from './layout/components/product/product.component';
import { AuthGuardGuard } from './RoutingGuards/auth-guard.guard';

const routes: Routes = [
 
    { path: 'login', component: LoginPageComponent },
    
    { path: 'home', component: MainPageComponent   
  },
    {
      path:'product',
      loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    
    }, 
    
    //checkout module is lazy loaded .
    {
      path:'checkOut',
      canActivate: [AuthGuardGuard],
      loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)    
    },
 
    { path: 'cart', component: CartPageComponent ,canActivate: [AuthGuardGuard]  },
    {
      path:'product/:id',
      component:ProductComponent
    
    }, 
    { path: '', component: MainPageComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
