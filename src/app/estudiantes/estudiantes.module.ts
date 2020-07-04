import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EstudiantesComponent } from './estudiantes.component';
import {EstudiantesRoutingModule} from './estudiantes-routing.module';
import {CoreModule} from '../core/core.module';



@NgModule({
  declarations: [EstudiantesComponent],
  imports: [
    CommonModule,
    NgbModule,
    CoreModule,
    EstudiantesRoutingModule,
  ]
})
export class EstudiantesModule { }
