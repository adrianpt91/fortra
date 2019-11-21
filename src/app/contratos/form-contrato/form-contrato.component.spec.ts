import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContratoComponent } from './form-contrato.component';

describe('FormContratoComponent', () => {
  let component: FormContratoComponent;
  let fixture: ComponentFixture<FormContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
