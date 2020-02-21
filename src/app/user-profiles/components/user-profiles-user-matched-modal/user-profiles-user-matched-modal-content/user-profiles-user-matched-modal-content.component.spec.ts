import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUserMatchedModalContentComponent } from './user-profiles-user-matched-modal-content.component';

describe('UserProfilesUserMatchedModalContentComponent', () => {
  let component: UserProfilesUserMatchedModalContentComponent;
  let fixture: ComponentFixture<UserProfilesUserMatchedModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilesUserMatchedModalContentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilesUserMatchedModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
