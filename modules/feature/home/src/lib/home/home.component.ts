import { Component } from '@angular/core';
import { mockCourses } from '@treinamento-ergon/course-data-access';
import { Course } from 'modules/data-access/course/src/lib/models/course.model';

@Component({
  selector: 'treinamento-ergon-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  courses: Course[] = mockCourses.map((course) => ({
    ...course,
    nota: parseInt((course.nota / 20).toFixed(1)),
  }));
}
