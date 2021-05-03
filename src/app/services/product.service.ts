import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private PRODUCT_SERVICE_BASE_URL = "./assets/mock-data";

  constructor(private readonly http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    const url = `${this.PRODUCT_SERVICE_BASE_URL}/products.json`;
    //console.log(this.http.get<Product[]>(url));
    
    return this.http.get<Product[]>(url);
  }

 
}
