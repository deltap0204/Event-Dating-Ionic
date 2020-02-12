import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickbloxCreateAndUploadFileComponent} from './quickblox-create-and-upload-file.component';

describe('QuickbloxCreateAndUploadFileComponent', () => {
  let component: QuickbloxCreateAndUploadFileComponent;
  let fixture: ComponentFixture<QuickbloxCreateAndUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbloxCreateAndUploadFileComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbloxCreateAndUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
