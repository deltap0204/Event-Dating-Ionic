import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventPageComponent } from './events-event-page.component';

describe('EventsEventPageComponent', () => {
  let component: EventsEventPageComponent;
  let fixture: ComponentFixture<EventsEventPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsEventPageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
