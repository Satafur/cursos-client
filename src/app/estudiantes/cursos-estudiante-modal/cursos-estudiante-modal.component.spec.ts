import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosEstudianteModalComponent } from './cursos-estudiante-modal.component';

describe('CursosEstudianteModalComponent', () => {
  let component: CursosEstudianteModalComponent;
  let fixture: ComponentFixture<CursosEstudianteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosEstudianteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosEstudianteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
