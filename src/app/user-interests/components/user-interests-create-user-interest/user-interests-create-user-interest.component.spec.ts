import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserInterestsCreateUserInterestComponent} from './user-interests-create-user-interest.component';

describe('UserInterestsCreateUserInterestComponent', () => {
  let component: UserInterestsCreateUserInterestComponent;
  let fixture: ComponentFixture<UserInterestsCreateUserInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterestsCreateUserInterestComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterestsCreateUserInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
