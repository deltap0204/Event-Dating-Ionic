import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersUserCognitoConfirmSignupComponent} from './users-user-cognito-confirm-signup.component';

describe('UsersUserCongnitoConfirmSignupComponent', () => {
  let component: UsersUserCognitoConfirmSignupComponent;
  let fixture: ComponentFixture<UsersUserCognitoConfirmSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersUserCognitoConfirmSignupComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersUserCognitoConfirmSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
