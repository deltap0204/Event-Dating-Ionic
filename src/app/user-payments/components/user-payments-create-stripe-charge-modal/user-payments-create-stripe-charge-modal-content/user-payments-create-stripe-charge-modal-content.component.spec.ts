import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymentsCreateStripeChargeModalContentComponent } from './user-payments-create-stripe-charge-modal-content.component';

describe('UserPaymentsCreateStripeChargeModalContentComponent', () => {
  let component: UserPaymentsCreateStripeChargeModalContentComponent;
  let fixture: ComponentFixture<UserPaymentsCreateStripeChargeModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaymentsCreateStripeChargeModalContentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaymentsCreateStripeChargeModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
