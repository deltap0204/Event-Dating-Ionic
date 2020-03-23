import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserInterestsByEntityCountComponent} from './user-interests-by-entity-count.component';

describe('UserInterestsByEntityCountComponent', () => {
  let component: UserInterestsByEntityCountComponent;
  let fixture: ComponentFixture<UserInterestsByEntityCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterestsByEntityCountComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterestsByEntityCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
