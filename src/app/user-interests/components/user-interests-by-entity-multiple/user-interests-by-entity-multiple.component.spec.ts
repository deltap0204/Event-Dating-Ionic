import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserInterestsByEntityMultipleComponent} from './user-interests-by-entity-multiple.component';

describe('UserInterestsByEntityMultipleComponent', () => {
  let component: UserInterestsByEntityMultipleComponent;
  let fixture: ComponentFixture<UserInterestsByEntityMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterestsByEntityMultipleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterestsByEntityMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
