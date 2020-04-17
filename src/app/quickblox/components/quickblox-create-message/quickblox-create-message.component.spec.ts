import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxCreateMessageComponent} from './quickblox-create-message.component';

describe('QuickbloxCreateMessageComponent', () => {
  let component: QuickbloxCreateMessageComponent;
  let fixture: ComponentFixture<QuickbloxCreateMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxCreateMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxCreateMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
