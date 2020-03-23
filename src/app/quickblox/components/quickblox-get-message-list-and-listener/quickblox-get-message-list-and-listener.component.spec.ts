import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxGetMessageListAndListenerComponent} from './quickblox-get-message-list-and-listener.component';

describe('QuickbloxGetMessageListAndListenerComponent', () => {
  let component: QuickbloxGetMessageListAndListenerComponent;
  let fixture: ComponentFixture<QuickbloxGetMessageListAndListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxGetMessageListAndListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxGetMessageListAndListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
