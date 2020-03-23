import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxGetOnlineUsersForDialogComponent} from './quickblox-get-online-users-for-dialog.component';

describe('QuickbloxGetOnlineUsersForDialogComponent', () => {
  let component: QuickbloxGetOnlineUsersForDialogComponent;
  let fixture: ComponentFixture<QuickbloxGetOnlineUsersForDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxGetOnlineUsersForDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxGetOnlineUsersForDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
