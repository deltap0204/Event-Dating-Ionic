import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersUserProfileValueComponent} from './users-user-profile-value.component';

describe('UsersUserProfileValueComponent', () => {
  let component: UsersUserProfileValueComponent;
  let fixture: ComponentFixture<UsersUserProfileValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersUserProfileValueComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersUserProfileValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
