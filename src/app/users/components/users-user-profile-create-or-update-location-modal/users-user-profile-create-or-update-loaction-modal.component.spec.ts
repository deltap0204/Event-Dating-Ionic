import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersUserProfileCreateOrUpdateLocationModalComponent } from './users-user-profile-create-or-update-location-modal.component';

describe('UsersUserProfileCreateOrUpdateLocationModalComponent', () => {
  let component: UsersUserProfileCreateOrUpdateLocationModalComponent;
  let fixture: ComponentFixture<UsersUserProfileCreateOrUpdateLocationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersUserProfileCreateOrUpdateLocationModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersUserProfileCreateOrUpdateLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
