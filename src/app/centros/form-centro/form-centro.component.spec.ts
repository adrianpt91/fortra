import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCentroComponent } from './form-centro.component';

describe('FormCentroComponent', () => {
  let component: FormCentroComponent;
  let fixture: ComponentFixture<FormCentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
