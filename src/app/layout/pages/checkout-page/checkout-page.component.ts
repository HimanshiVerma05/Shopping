import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  orderPlaced(){
    console.log('Order placed');
  }
}
