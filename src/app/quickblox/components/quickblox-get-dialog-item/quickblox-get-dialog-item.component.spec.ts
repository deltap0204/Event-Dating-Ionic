import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxGetDialogItemComponent} from './quickblox-get-dialog-item.component';

describe('QuickbloxGetDialogItemComponent', () => {
  let component: QuickbloxGetDialogItemComponent;
  let fixture: ComponentFixture<QuickbloxGetDialogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxGetDialogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxGetDialogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
