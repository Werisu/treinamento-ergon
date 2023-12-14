import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { inject } from '@angular/core';

export function getParamId(): Observable<string> {
  return inject(ActivatedRoute).params.pipe(map((params) => params['id']));
}

// get the route directory
export function getTitleDir(): Observable<string> {
  return inject(ActivatedRoute).data.pipe(map((data) => data['title'] || ''));
}

export function isNotCourseRouter() {
  return inject(ActivatedRoute).url.pipe(
    map((urlSegments) => !urlSegments.some((segment) => segment.path === '1'))
  );
}
