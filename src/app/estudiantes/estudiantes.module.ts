import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EstudiantesComponent } from './estudiantes.component';
import {EstudiantesRoutingModule} from './estudiantes-routing.module';
import {CoreModule} from '../core/core.module';
import { FormEstudianteModalComponent } from './form-estudiante-modal/form-estudiante-modal.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [EstudiantesComponent, FormEstudianteModalComponent],
  imports: [
    CommonModule,
    NgbModule,
    CoreModule,
    ReactiveFormsModule,
    EstudiantesRoutingModule,
  ]
})
export class EstudiantesModule { }
