import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxListDialogsComponent} from './quickblox-list-dialogs.component';

describe('QuickbloxListDialogsComponent', () => {
  let component: QuickbloxListDialogsComponent;
  let fixture: ComponentFixture<QuickbloxListDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxListDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxListDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
