import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersUserCognitoResendSignupConfirmComponent} from './users-user-cognito-resend-signup-confirm.component';

describe('UsersUserCognitoResendSignupConfirmComponent', () => {
  let component: UsersUserCognitoResendSignupConfirmComponent;
  let fixture: ComponentFixture<UsersUserCognitoResendSignupConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersUserCognitoResendSignupConfirmComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersUserCognitoResendSignupConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
