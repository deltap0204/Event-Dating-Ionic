import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImagesByEntityAndTypeComponent} from './images-by-entity-and-type.component';

describe('ImagesByEntityAndTypeComponent', () => {
  let component: ImagesByEntityAndTypeComponent;
  let fixture: ComponentFixture<ImagesByEntityAndTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesByEntityAndTypeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesByEntityAndTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
