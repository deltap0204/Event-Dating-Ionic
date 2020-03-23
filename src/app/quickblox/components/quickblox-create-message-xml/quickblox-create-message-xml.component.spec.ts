import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxCreateMessageXmlComponent} from './quickblox-create-message-xml.component';

describe('QuickbloxCreateMessageXmlComponent', () => {
  let component: QuickbloxCreateMessageXmlComponent;
  let fixture: ComponentFixture<QuickbloxCreateMessageXmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxCreateMessageXmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxCreateMessageXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
