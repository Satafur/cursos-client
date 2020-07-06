import {Component, Input, OnInit} from '@angular/core';
import {Curso} from '../../core/entities/curso';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cursos-estudiante-modal',
  templateUrl: './cursos-estudiante-modal.component.html',
  styleUrls: ['./cursos-estudiante-modal.component.css']
})
export class CursosEstudianteModalComponent implements OnInit {

  @Input() cursos: Array<Curso>;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
