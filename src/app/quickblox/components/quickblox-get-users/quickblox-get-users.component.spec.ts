import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxGetUsersComponent} from './quickblox-get-users.component';

describe('QuickbloxGetUsersComponent', () => {
  let component: QuickbloxGetUsersComponent;
  let fixture: ComponentFixture<QuickbloxGetUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxGetUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxGetUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
