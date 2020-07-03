import {Injectable} from '@angular/core';
import {Curso} from '../entities/curso';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  endpoint = 'cursos';

  constructor(private http: HttpClient) {
  }

  getAll(): Promise<Array<Curso>> {
    return this.http.get<Array<Curso>>(`${environment.host}/${this.endpoint}`).toPromise();
  }

  getById(elementId: number): Promise<Curso> {
    return this.http.get<Curso>(`${environment.host}/${this.endpoint}/${elementId}`).toPromise();
  }

  create(element: Curso): Promise<Curso> {
    return this.http.post<Curso>(`${environment.host}/${this.endpoint}`, element).toPromise();
  }

  update(element: Curso): Promise<Curso> {
    return this.http.put<Curso>(`${environment.host}/${this.endpoint}/${element.id}`, element).toPromise();
  }

  remove(elementId: number): Promise<Curso> {
    return this.http.delete<Curso>(`${environment.host}/${this.endpoint}/${elementId}`).toPromise();
  }
}
