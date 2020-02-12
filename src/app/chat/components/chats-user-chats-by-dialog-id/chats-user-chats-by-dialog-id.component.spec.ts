import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsUserChatsByDialogIdComponent } from './chats-user-chats-by-dialog-id.component';

describe('ChatsUserChatsByDialogIdComponent', () => {
  let component: ChatsUserChatsByDialogIdComponent;
  let fixture: ComponentFixture<ChatsUserChatsByDialogIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsUserChatsByDialogIdComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsUserChatsByDialogIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
