import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarEstudianteModalComponent } from './asignar-estudiante-modal.component';

describe('AsignarEstudianteModalComponent', () => {
  let component: AsignarEstudianteModalComponent;
  let fixture: ComponentFixture<AsignarEstudianteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarEstudianteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarEstudianteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
