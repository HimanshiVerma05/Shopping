import { TestBed } from '@angular/core/testing';
import { Cart } from '../model/cart';
import { Product } from '../model/product';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //if an item is added to cart then the value of cart items should be greater than 1 

  it("should have cart value greater than 1 ", () => {
    console.log('custom test case for cart service ');
    let prod:Product={
      id:1,
    title: 'Test',
    brand: 'Test',
    price: 200,
    description: 'Test',
    image: '',
    category:'Men'
    };
    let cart:Cart ={
      product:prod,
      quantity:1
    };
    
    
    service.addToCart(cart);
    expect(service.cartListSubject.value.length).toBeGreaterThanOrEqual(1);
  });
});
