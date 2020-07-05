import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Curso} from '../../core/entities/curso';

@Component({
  selector: 'app-form-cursos-modal',
  templateUrl: './form-cursos-modal.component.html',
  styleUrls: ['./form-cursos-modal.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class FormCursosModalComponent implements OnInit {

  @Input() curso: Curso;

  cursoForm: CursoForm;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.cursoForm = new CursoForm(this.curso);
  }


  onSubmit(): void {
    this.cursoForm.validated = true;
    if (this.cursoForm.valid) {
      this.activeModal.close(this.cursoForm.getRawValue());
    }
  }

}

export class CursoForm extends FormGroup {
  validated = false;

  constructor(curso: Curso) {
    super({
      id: new FormControl(curso.id),
      nombre: new FormControl(curso.nombre),
      horario: new FormControl(curso.horario),
      fechaInicio: new FormControl(curso.fechaInicio),
      fechaFin: new FormControl(curso.fechaFin),
    });

    this.controls.nombre.setValidators([
      Validators.required,
      Validators.minLength(2),
    ]);

    this.controls.horario.setValidators([
      Validators.required,
      Validators.minLength(2),
    ]);

    this.controls.fechaInicio.setValidators([
      Validators.required,
    ]);

    this.controls.fechaFin.setValidators([
      Validators.required,
    ]);
  }

  controlInvalid(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  formInvalid(): boolean {
    return this.controlInvalid(this.controls.nombre) ||
      this.controlInvalid(this.controls.horario) ||
      this.controlInvalid(this.controls.fechaInicio) ||
      this.controlInvalid(this.controls.fechaFin);
  }

}
