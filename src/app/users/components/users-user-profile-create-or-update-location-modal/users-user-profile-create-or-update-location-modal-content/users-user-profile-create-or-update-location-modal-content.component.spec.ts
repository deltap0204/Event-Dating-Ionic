import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersUserProfileCreateOrUpdateLocationModalContentComponent } from './users-user-profile-create-or-update-location-modal-content.component';

describe('UsersUserProfileCreateOrUpdateLocationModalContentComponent', () => {
  let component: UsersUserProfileCreateOrUpdateLocationModalContentComponent;
  let fixture: ComponentFixture<UsersUserProfileCreateOrUpdateLocationModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersUserProfileCreateOrUpdateLocationModalContentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersUserProfileCreateOrUpdateLocationModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
