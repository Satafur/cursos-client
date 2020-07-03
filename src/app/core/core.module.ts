import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CursosService} from './data/cursos.service';
import {EstudiantesService} from './data/estudiantes.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    CursosService,
    EstudiantesService,
  ]
})
export class CoreModule { }
