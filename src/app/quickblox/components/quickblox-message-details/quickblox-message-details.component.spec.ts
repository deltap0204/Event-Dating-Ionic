import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxMessageDetailsComponent} from './quickblox-message-details.component';

describe('QuickbloxMessageDetailsComponent', () => {
  let component: QuickbloxMessageDetailsComponent;
  let fixture: ComponentFixture<QuickbloxMessageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxMessageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxMessageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
