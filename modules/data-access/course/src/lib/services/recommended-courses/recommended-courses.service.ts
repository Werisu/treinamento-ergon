import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class RecommendedCoursesService {
  readonly apiUrl = 'https://65453b915a0b4b04436dd985.mockapi.io/api/v1';
  constructor(private http: HttpClient) {}

  getCourses(page: number = 1, limit: number = 5): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/treinamento`, {
      params: {
        page,
        limit,
      },
    });
  }
}
