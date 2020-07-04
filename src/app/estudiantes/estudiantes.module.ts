import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EstudiantesComponent } from './estudiantes.component';
import {EstudiantesRoutingModule} from './estudiantes-routing.module';



@NgModule({
  declarations: [EstudiantesComponent],
  imports: [
    CommonModule,
    NgbModule,
    EstudiantesRoutingModule,
  ]
})
export class EstudiantesModule { }
