import { Component, OnInit } from '@angular/core';
import {ApiService} from '../core/data/api.service';
import {Curso} from '../core/entities/curso';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  list: Array<Curso>;

  constructor(private apiService: ApiService, private ngbModal: NgbModal) { }

  async ngOnInit(): Promise<void> {
    this.list = await this.apiService.cursosData.getAll();
  }
}
