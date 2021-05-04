import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpLoaderFactory } from 'src/app/app.module';
		import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
		import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CheckoutPageComponent } from './checkout-page.component';
import { FormsModule } from '@angular/forms';

describe('CheckoutPageComponent', () => {
  let component: CheckoutPageComponent;
  let fixture: ComponentFixture<CheckoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide : TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps : [HttpClient]
          }
        })],
      declarations: [ CheckoutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
