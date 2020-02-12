import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserInterestsUserInterestDetailsComponent} from './user-interests-user-interest-details.component';

describe('UserInterestsUserInterestDetailsComponent', () => {
  let component: UserInterestsUserInterestDetailsComponent;
  let fixture: ComponentFixture<UserInterestsUserInterestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterestsUserInterestDetailsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterestsUserInterestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
