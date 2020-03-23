import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxMessageListenerComponent} from './quickblox-message-listener.component';

describe('QuickbloxMessageListenerComponent', () => {
  let component: QuickbloxMessageListenerComponent;
  let fixture: ComponentFixture<QuickbloxMessageListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxMessageListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxMessageListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
