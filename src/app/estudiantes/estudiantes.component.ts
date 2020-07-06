import { Component, OnInit } from '@angular/core';
import {Estudiante} from '../core/entities/estudiante';
import {ApiService} from '../core/data/api.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDialogComponent} from '../shared/confirm-dialog/confirm-dialog.component';
import {FormEstudianteModalComponent} from './form-estudiante-modal/form-estudiante-modal.component';
import {CursosEstudianteModalComponent} from './cursos-estudiante-modal/cursos-estudiante-modal.component';

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

  async onCreate(): Promise<void> {
    try {
      const element: Estudiante = await this.openFormModal(new Estudiante());

      if (element) {
        await this.apiService.estudiantesData.create(element);
        await this.loadData();
      }
    } catch (e) {
    }
  }

  async onEdit(event: Estudiante): Promise<void> {
    try {
      const estudiante = await this.apiService.estudiantesData.getById(event.id);
      const element: Estudiante = await this.openFormModal(estudiante);

      if (element) {
        await this.apiService.estudiantesData.update(element);
        await this.loadData();
      }
    } catch (e) {
    }
  }

  async onDelete(event: Estudiante): Promise<void> {
    try {
      const confirmDialogRef = this.ngbModal.open(ConfirmDialogComponent);
      confirmDialogRef.componentInstance.title = 'Remover Estudiante';
      confirmDialogRef.componentInstance.description = '¿Realmente desea eliminar este registro?';
      confirmDialogRef.componentInstance.level = ConfirmDialogComponent.DANGER_LEVEL;

      if (await confirmDialogRef.result) {
        await this.apiService.estudiantesData.remove(event.id);
        await this.loadData();
      }
    } catch (e) {
    }
  }

  async onOpenCursos(event: Estudiante): Promise<void> {
    try {
      await this.openCursosModal(event);
    } catch (e) {
    }
  }
  private async openFormModal(element: Estudiante): Promise<Estudiante> {
    const refModal = this.ngbModal.open(FormEstudianteModalComponent);
    refModal.componentInstance.estudiante = element;

    return refModal.result;
  }

  private async openCursosModal(element: Estudiante): Promise<void> {
    const refModal = this.ngbModal.open(CursosEstudianteModalComponent);
    refModal.componentInstance.cursos = await this.apiService.cursosData.getByEstudianteId(element.id);

    return refModal.result;
  }

  private async loadData(): Promise<void> {
    try {
      this.list = await this.apiService.estudiantesData.getAll();
    } catch (e) {

    }
  }
}
