import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {
  RecommendedCoursesService,
  mockCourses,
} from '@treinamento-ergon/course-data-access';
import { of } from 'rxjs';
import { CourseCardComponent } from '@treinamento-ergon/course-ui';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      declarations: [HomeComponent],
      providers: [
        {
          provide: RecommendedCoursesService,
          useValue: {
            getCourses: () => of(mockCourses),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render recommended cards correctly', () => {
    const cards: HTMLElement[] = fixture.nativeElement.querySelectorAll(
      'treinamento-ergon-course-card'
    );
    expect(cards.length).toBe(mockCourses.length);
  });
});
