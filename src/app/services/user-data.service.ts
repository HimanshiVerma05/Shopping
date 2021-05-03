import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private USER_SERVICE_BASE_URL = "./assets/mock-data";

  constructor(private readonly httpclient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    console.log('getUsers method of service');
    const url = `${this.USER_SERVICE_BASE_URL}/users.json`;

    return this.httpclient.get<User[]>(url);
  }



}
