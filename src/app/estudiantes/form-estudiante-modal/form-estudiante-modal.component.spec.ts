import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstudianteModalComponent } from './form-estudiante-modal.component';

describe('FormEstudianteModalComponent', () => {
  let component: FormEstudianteModalComponent;
  let fixture: ComponentFixture<FormEstudianteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEstudianteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEstudianteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
