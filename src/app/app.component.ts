import { Component } from '@angular/core';
import { isNotCourseRouter } from '@treinamento-ergon/course-data-access';

@Component({
  selector: 'treinamento-ergon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Juntos Somos a Transformação da Educação!';
  isCourse$ = isNotCourseRouter();
}
