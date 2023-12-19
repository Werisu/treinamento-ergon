import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../models/course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseSearchService {
  readonly apiUrl = 'https://65453b915a0b4b04436dd985.mockapi.io/api/v1';
  constructor(private http: HttpClient) {}

  searchByTitle(titulo: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/treinamento`, {
      params: {
        titulo,
      },
    });
  }

  getById(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/treinamento/${id}`);
  }
}
