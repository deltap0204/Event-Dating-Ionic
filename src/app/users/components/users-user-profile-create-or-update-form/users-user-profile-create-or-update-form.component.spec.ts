import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersUserProfileCreateOrUpdateFormComponent} from './users-user-profile-create-or-update-form.component';

describe('UsersUserProfileCreateOrUpdateFormComponent', () => {
  let component: UsersUserProfileCreateOrUpdateFormComponent;
  let fixture: ComponentFixture<UsersUserProfileCreateOrUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersUserProfileCreateOrUpdateFormComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersUserProfileCreateOrUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
