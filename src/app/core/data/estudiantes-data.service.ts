import { Injectable } from '@angular/core';
import {Estudiante} from '../entities/estudiante';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesDataService {

  endpoint = 'estudiantes';

  constructor(private http: HttpClient) { }

  getAll(): Promise<Array<Estudiante>> {
    return this.http.get<Array<Estudiante>>(`${environment.host}/${this.endpoint}`).toPromise();
  }

  getById(elementId: number): Promise<Estudiante> {
    return this.http.get<Estudiante>(`${environment.host}/${this.endpoint}/${elementId}`).toPromise();
  }

  create(element: Estudiante): Promise<Estudiante> {
    return this.http.post<Estudiante>(`${environment.host}/${this.endpoint}`, element).toPromise();
  }

  update(element: Estudiante): Promise<Estudiante> {
    return this.http.put<Estudiante>(`${environment.host}/${this.endpoint}`, element).toPromise();
  }

  remove(element: Estudiante): Promise<Estudiante> {
    return this.http.delete<Estudiante>(`${environment.host}/${this.endpoint}`).toPromise();
  }
}
