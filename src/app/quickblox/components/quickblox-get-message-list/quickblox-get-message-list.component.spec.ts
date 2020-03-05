import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxGetMessageListComponent} from './quickblox-get-message-list.component';

describe('QuickbloxGetMessageListComponent', () => {
  let component: QuickbloxGetMessageListComponent;
  let fixture: ComponentFixture<QuickbloxGetMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxGetMessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxGetMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
