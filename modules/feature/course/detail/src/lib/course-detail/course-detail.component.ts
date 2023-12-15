import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getParamId } from '@treinamento-ergon/course-data-access';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ProgressComponent } from './progress/progress.component';
import { LessonsComponent } from './lessons/lessons.component';

@Component({
  selector: 'treinamento-ergon-course-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    ProgressComponent,
    LessonsComponent,
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss',
})
export class CourseDetailComponent {
  public courseId$ = getParamId();
  public titulo = 'Diário Escolar - Treinamento completo';
}
