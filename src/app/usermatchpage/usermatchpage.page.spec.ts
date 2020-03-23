import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermatchpagePage } from './usermatchpage.page';

describe('UsermatchpagePage', () => {
  let component: UsermatchpagePage;
  let fixture: ComponentFixture<UsermatchpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermatchpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermatchpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
