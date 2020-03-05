import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImagesCreateFileUploadRequestComponent} from './images-create-file-upload-request.component';

describe('ImagesCreateFileUploadRequestComponent', () => {
  let component: ImagesCreateFileUploadRequestComponent;
  let fixture: ComponentFixture<ImagesCreateFileUploadRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesCreateFileUploadRequestComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesCreateFileUploadRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
