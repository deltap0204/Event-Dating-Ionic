import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymentsCreateStripeChargeModalComponent } from './user-payments-create-stripe-charge-modal.component';

describe('UserPaymentsCreateStripeChargeModalComponent', () => {
  let component: UserPaymentsCreateStripeChargeModalComponent;
  let fixture: ComponentFixture<UserPaymentsCreateStripeChargeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaymentsCreateStripeChargeModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaymentsCreateStripeChargeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
