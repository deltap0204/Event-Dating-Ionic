import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymentsCreateStripChargeComponent } from './user-payments-create-strip-charge.component';

describe('UserPaymentsCreateStripChargeComponent', () => {
  let component: UserPaymentsCreateStripChargeComponent;
  let fixture: ComponentFixture<UserPaymentsCreateStripChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaymentsCreateStripChargeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaymentsCreateStripChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
