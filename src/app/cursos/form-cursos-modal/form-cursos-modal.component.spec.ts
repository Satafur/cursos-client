import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCursosModalComponent } from './form-cursos-modal.component';

describe('FormCursosModalComponent', () => {
  let component: FormCursosModalComponent;
  let fixture: ComponentFixture<FormCursosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCursosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCursosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
