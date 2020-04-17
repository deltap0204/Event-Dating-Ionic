import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxMessageDeleteComponent} from './quickblox-message-delete.component';

describe('QuickbloxMessageDeleteComponent', () => {
  let component: QuickbloxMessageDeleteComponent;
  let fixture: ComponentFixture<QuickbloxMessageDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxMessageDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxMessageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
