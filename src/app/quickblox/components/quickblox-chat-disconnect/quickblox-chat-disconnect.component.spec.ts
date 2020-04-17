import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxChatDisconnectComponent} from './quickblox-chat-disconnect.component';

describe('QuickbloxChatDisconnectComponent', () => {
  let component: QuickbloxChatDisconnectComponent;
  let fixture: ComponentFixture<QuickbloxChatDisconnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxChatDisconnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxChatDisconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
