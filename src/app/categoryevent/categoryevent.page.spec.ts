import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryeventPage } from './categoryevent.page';

describe('CategoryeventPage', () => {
  let component: CategoryeventPage;
  let fixture: ComponentFixture<CategoryeventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryeventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryeventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
