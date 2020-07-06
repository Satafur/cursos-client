import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CursosComponent } from './cursos.component';
import {CursosRoutingModule} from './cursos-routing.module';
import {CoreModule} from '../core/core.module';
import { FormCursosModalComponent } from './form-cursos-modal/form-cursos-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AsignarEstudianteModalComponent } from './asignar-estudiante-modal/asignar-estudiante-modal.component';



@NgModule({
  declarations: [CursosComponent, FormCursosModalComponent, AsignarEstudianteModalComponent],
  imports: [
    CommonModule,
    NgbModule,
    CoreModule,
    CursosRoutingModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
