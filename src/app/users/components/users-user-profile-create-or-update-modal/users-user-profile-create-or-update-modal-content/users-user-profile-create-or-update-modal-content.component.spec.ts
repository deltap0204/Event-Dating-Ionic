import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersUserProfileCreateOrUpdateModalContentComponent } from './users-user-profile-create-or-update-modal-content.component';

describe('UsersUserProfileCreateOrUpdateModalContentComponent', () => {
  let component: UsersUserProfileCreateOrUpdateModalContentComponent;
  let fixture: ComponentFixture<UsersUserProfileCreateOrUpdateModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersUserProfileCreateOrUpdateModalContentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersUserProfileCreateOrUpdateModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
