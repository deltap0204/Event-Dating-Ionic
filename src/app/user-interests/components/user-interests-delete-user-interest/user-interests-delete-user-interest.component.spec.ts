import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterestsDeleteUserInterestComponent } from './user-interests-delete-user-interest.component';

describe('UserInterestsDeleteUserInterestComponent', () => {
  let component: UserInterestsDeleteUserInterestComponent;
  let fixture: ComponentFixture<UserInterestsDeleteUserInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterestsDeleteUserInterestComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterestsDeleteUserInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
