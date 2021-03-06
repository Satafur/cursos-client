import { Component, OnInit } from '@angular/core';
import {ApiService} from '../core/data/api.service';
import {Curso} from '../core/entities/curso';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDialogComponent} from '../shared/confirm-dialog/confirm-dialog.component';
import {FormCursosModalComponent} from './form-cursos-modal/form-cursos-modal.component';
import {AsignarEstudianteModalComponent} from './asignar-estudiante-modal/asignar-estudiante-modal.component';
import {Estudiante} from '../core/entities/estudiante';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  list: Array<Curso>;

  constructor(private apiService: ApiService, private ngbModal: NgbModal) { }

  async ngOnInit(): Promise<void> {
    await this.loadData();
  }

  async onCreate(): Promise<void> {
    try {
      const element: Curso = await this.openFormModal(new Curso());

      if (element) {
        await this.apiService.cursosData.create(element);
        await this.loadData();
      }
    } catch (e) {
    }
  }

  async onEdit(event: Curso): Promise<void> {
    try {
      const curso = await this.apiService.cursosData.getById(event.id);
      const element: Curso = await this.openFormModal(curso);

      if (element) {
        await this.apiService.cursosData.update(element);
        await this.loadData();
      }
    } catch (e) {
    }
  }

  async onAssign(event: Curso): Promise<void> {
    try {
      await this.openAsignarModal(event);
    }catch (e) {

    }
  }

  async onDelete(event: Curso): Promise<void> {
    try {
      const confirmDialogRef = this.ngbModal.open(ConfirmDialogComponent);
      confirmDialogRef.componentInstance.title = 'Remover Curso';
      confirmDialogRef.componentInstance.description = '¿Realmente desea eliminar este registro?';
      confirmDialogRef.componentInstance.level = ConfirmDialogComponent.DANGER_LEVEL;

      if (await confirmDialogRef.result) {
        await this.apiService.cursosData.remove(event.id);
        await this.loadData();
      }
    } catch (e) {
    }
  }

  private async openFormModal(element: Curso): Promise<Curso> {
    const refModal = this.ngbModal.open(FormCursosModalComponent);
    refModal.componentInstance.curso = element;

    return refModal.result;
  }

  private async openAsignarModal(element: Curso): Promise<Curso> {
    const refModal = this.ngbModal.open(AsignarEstudianteModalComponent, {size: 'lg'});
    refModal.componentInstance.curso = element;
    refModal.componentInstance.estudiantes = await this.apiService.estudiantesData.getAll();

    refModal.componentInstance.assign.subscribe(async (event: Estudiante) => {
      try {
        const confirmDialogRef = this.ngbModal.open(ConfirmDialogComponent);
        confirmDialogRef.componentInstance.title = 'Asignar estudiante';
        confirmDialogRef.componentInstance.description = '¿Realmente desea asignar el estudiante a este curso?';
        confirmDialogRef.componentInstance.level = ConfirmDialogComponent.PRIMARY_LEVEL;

        if (await confirmDialogRef.result) {
          await this.apiService.cursosData.assign(element.id, event.id);
        }
      } catch (e) {
      }

    });

    return refModal.result;
  }

  private async loadData(): Promise<void> {
    try {
      this.list = await this.apiService.cursosData.getAll();
    } catch (e) {

    }
  }
}
