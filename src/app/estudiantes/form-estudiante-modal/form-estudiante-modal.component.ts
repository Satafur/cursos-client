import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Estudiante} from '../../core/entities/estudiante';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-estudiante-modal',
  templateUrl: './form-estudiante-modal.component.html',
  styleUrls: ['./form-estudiante-modal.component.css']
})
export class FormEstudianteModalComponent implements OnInit {

  @Input() estudiante: Estudiante;

  estudianteForm: EstudianteForm;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.estudianteForm = new EstudianteForm(this.estudiante);
  }


  onSubmit(): void {
    this.estudianteForm.validated = true;
    if (this.estudianteForm.valid) {
      this.activeModal.close(this.estudianteForm.getRawValue());
    }
  }

}

export class EstudianteForm extends FormGroup {
  validated = false;

  constructor(estudiante: Estudiante) {
    super({
      id: new FormControl(estudiante.id),
      nombres: new FormControl(estudiante.nombres),
      apellidos: new FormControl(estudiante.apellidos),
      edad: new FormControl(estudiante.edad),
      correo: new FormControl(estudiante.correo),
    });

    this.controls.nombres.setValidators([
      Validators.required,
      Validators.minLength(2),
    ]);

    this.controls.apellidos.setValidators([
      Validators.required,
      Validators.minLength(2),
    ]);

    this.controls.edad.setValidators([
      Validators.required,
      Validators.min(1),
    ]);

    this.controls.correo.setValidators([
      Validators.required,
      Validators.email,
    ]);
  }

  controlInvalid(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  formInvalid(): boolean {
    console.log(this.controls.nombres.errors, this.controls.apellidos.errors, this.controls.edad.errors, this.controls.correo.errors);
    return this.controlInvalid(this.controls.nombres) ||
      this.controlInvalid(this.controls.apellidos) ||
      this.controlInvalid(this.controls.edad) ||
      this.controlInvalid(this.controls.correo);
  }
}
