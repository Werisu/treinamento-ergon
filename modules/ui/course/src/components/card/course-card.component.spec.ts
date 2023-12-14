import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { mockCourses } from '@treinamento-ergon/course-data-access';
import { RouterTestingModule } from '@angular/router/testing';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CourseCardComponent,
        MatCardModule,
        MatIconModule,
        MatProgressBarModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = mockCourses[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course card info correctly', () => {
    const card: HTMLElement = fixture.nativeElement.querySelector('mat-card');
    const cardImage: HTMLImageElement = fixture.nativeElement.querySelector(
      'img'
    ) as HTMLImageElement;
    expect(card).toBeTruthy();
    expect(card.textContent).toContain(component.course.titulo);
    expect(cardImage.src).toContain(component.course.imagem);
  });
});
