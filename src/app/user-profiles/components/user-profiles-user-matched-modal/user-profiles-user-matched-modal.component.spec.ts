import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUserMatchedModalComponent } from './user-profiles-user-matched-modal.component';

describe('UserProfilesUserMatchedModalComponent', () => {
  let component: UserProfilesUserMatchedModalComponent;
  let fixture: ComponentFixture<UserProfilesUserMatchedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilesUserMatchedModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilesUserMatchedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
