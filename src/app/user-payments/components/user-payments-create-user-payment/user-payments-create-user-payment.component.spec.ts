import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymentsCreateUserPaymentComponent } from './user-payments-create-user-payment.component';

describe('UserPaymentsCreateUserPaymentComponent', () => {
  let component: UserPaymentsCreateUserPaymentComponent;
  let fixture: ComponentFixture<UserPaymentsCreateUserPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaymentsCreateUserPaymentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaymentsCreateUserPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
