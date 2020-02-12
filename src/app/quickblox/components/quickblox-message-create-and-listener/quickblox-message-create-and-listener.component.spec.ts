import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxMessageCreateAndListenerComponent} from './quickblox-message-create-and-listener.component';

describe('QuickbloxMessageCreateAndListenerComponent', () => {
  let component: QuickbloxMessageCreateAndListenerComponent;
  let fixture: ComponentFixture<QuickbloxMessageCreateAndListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxMessageCreateAndListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxMessageCreateAndListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
