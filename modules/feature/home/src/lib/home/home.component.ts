import { Component } from '@angular/core';
import { RecommendedCoursesService } from '@treinamento-ergon/course-data-access';
import { Course } from 'modules/data-access/course/src/lib/models/course.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'treinamento-ergon-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  courses$: Observable<Course[]> = this.recommendedCoursesService
    .getCourses()
    .pipe(
      map((courses) =>
        courses.map((course) => ({
          ...course,
          nota: parseInt((course.nota / 20).toFixed(1)),
        }))
      )
    );

  constructor(private recommendedCoursesService: RecommendedCoursesService) {}
}
