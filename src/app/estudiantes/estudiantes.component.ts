import { Component, OnInit } from '@angular/core';
import {Estudiante} from '../core/entities/estudiante';
import {ApiService} from '../core/data/api.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  list: Array<Estudiante>;

  constructor(private apiService: ApiService, private ngbModal: NgbModal) { }

  async ngOnInit(): Promise<void> {
    this.list = await this.apiService.estudiantesData.getAll();
  }

}
