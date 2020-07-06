import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Estudiante} from '../../core/entities/estudiante';
import {Curso} from '../../core/entities/curso';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-asignar-estudiante-modal',
  templateUrl: './asignar-estudiante-modal.component.html',
  styleUrls: ['./asignar-estudiante-modal.component.css']
})
export class AsignarEstudianteModalComponent implements OnInit {

  @Output() assign = new EventEmitter<Estudiante>();
  @Input() curso: Curso;
  @Input() estudiantes: Array<Estudiante>;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onAssign(event: Estudiante): void {
    this.assign.emit(event);
  }

}
