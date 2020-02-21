import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterestsCheckUserMatchComponent } from './user-interests-check-user-match.component';

describe('UserInterestsCheckUserMatchComponent', () => {
  let component: UserInterestsCheckUserMatchComponent;
  let fixture: ComponentFixture<UserInterestsCheckUserMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterestsCheckUserMatchComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterestsCheckUserMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
