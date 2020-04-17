import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxTypingListenerComponent} from './quickblox-typing-listener.component';

describe('QuickbloxTypingListenerComponent', () => {
  let component: QuickbloxTypingListenerComponent;
  let fixture: ComponentFixture<QuickbloxTypingListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxTypingListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxTypingListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
