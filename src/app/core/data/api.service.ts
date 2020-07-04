import { Injectable } from '@angular/core';
import {CursosDataService} from './cursos-data.service';
import {EstudiantesDataService} from './estudiantes-data.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public cursosData: CursosDataService,
    public estudiantesData: EstudiantesDataService,
  ) { }
}
