import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxUserChatPageComponent} from './quickblox-user-chat-page.component';

describe('QuickbloxUserChatPageComponent', () => {
  let component: QuickbloxUserChatPageComponent;
  let fixture: ComponentFixture<QuickbloxUserChatPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxUserChatPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxUserChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
