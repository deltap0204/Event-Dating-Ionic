import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserInterestsSimilarInterestsComponent} from './user-interests-similar-interests.component';

describe('UserInterestsSimilarInterestsComponent', () => {
  let component: UserInterestsSimilarInterestsComponent;
  let fixture: ComponentFixture<UserInterestsSimilarInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterestsSimilarInterestsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterestsSimilarInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
