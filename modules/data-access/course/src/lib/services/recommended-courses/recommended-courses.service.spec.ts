import { TestBed } from '@angular/core/testing';

import { RecommendedCoursesService } from './recommended-courses.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Course } from '../../models/course.model';
import { mockCourses } from '../../mocks/course.mock';

describe('RecommendedCoursesService', () => {
  let service: RecommendedCoursesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RecommendedCoursesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return recommended courses correctly', () => {
    // ARRANGE
    const url = `${service.apiUrl}/treinamento?page=1&limit=6`;
    let result: Course[] = [];

    // ACT
    service.getCourses().subscribe((course) => (result = course));

    // ASSERT
    const request = httpMock.expectOne(url);
    request.flush(mockCourses);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockCourses);
  });
});
