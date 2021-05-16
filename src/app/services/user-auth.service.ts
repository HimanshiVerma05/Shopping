import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private userSubject: BehaviorSubject<User>;
  //public user: Observable<User>;

  private sub;

  public users: Array<User>;

  constructor(private http: HttpClient, private router: Router, public userdataService: UserDataService) {

  this.getUsers();
  }

  getUsers(){
    this.sub = this.userdataService.getUsers()
    .subscribe(res => {
      this.users = res;
    })
  }

  authenticate(username: string, password: string) {

    const user = this.users.find(x => x.username === username && x.password === password);
    if (!user) {
      return false;

    }
    else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigateByUrl('/login');

  }
  login() {
    
    this.router.navigateByUrl('/login');

  }


}
