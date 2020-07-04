import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CursosDataService} from './data/cursos-data.service';
import {EstudiantesDataService} from './data/estudiantes-data.service';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './data/api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    CursosDataService,
    EstudiantesDataService,
    ApiService,
  ]
})
export class CoreModule { }
