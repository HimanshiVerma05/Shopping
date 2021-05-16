import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserAuthService } from './user-auth.service';

describe('UserAuthService', () => {
  let service: UserAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,
      RouterTestingModule]
    });
    service = TestBed.inject(UserAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


    //Test case to check if the user B and password B is able to be auhenticated.
    it("should authenticate user ", () => {
     
     service.users=[
      {
        "id":2,
       "username":"B", 
      "firstName":"B",
       "lastName":"B",
      "password":"B" 
     }

    ];
    
      expect(service.authenticate('B','B')).toBeTrue();
    }); 
});
