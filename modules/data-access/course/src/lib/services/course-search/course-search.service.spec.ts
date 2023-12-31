import { TestBed } from '@angular/core/testing';

import { CourseSearchService } from './course-search.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Course } from '../../models/course.model';
import { mockCourses } from '../../mocks/course.mock';

describe('CourseSearchService', () => {
  let service: CourseSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CourseSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return courses correctly', () => {
    // ARRANGE
    const mockName = 'titulo';
    const url = `${service.apiUrl}/treinamento?titulo=${mockName}`;
    let result: Course[] = [];

    // ACT
    service.searchByTitle(mockName).subscribe((courses) => (result = courses));

    // ASSERT
    const request = httpMock.expectOne(url);
    request.flush(mockCourses);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockCourses);
  });

  it('should return course by id correctly', () => {
    // ARRANGE
    const mockId = '123';
    const url = `${service.apiUrl}/treinamento/${mockId}`;
    let result!: Course;

    // ACT
    service.getById(mockId).subscribe((course) => (result = course));

    // ASSERT
    const request = httpMock.expectOne(url);
    request.flush(mockCourses[0]);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockCourses[0]);
  });
});
