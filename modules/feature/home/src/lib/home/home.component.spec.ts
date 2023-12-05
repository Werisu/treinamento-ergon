import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  RecommendedCoursesService,
  mockCourses,
} from '@treinamento-ergon/course-data-access';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, MatIconModule, MatProgressBarModule],
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
    const cards: HTMLElement[] =
      fixture.nativeElement.querySelectorAll('mat-card');
    expect(cards.length).toBe(mockCourses.length);
  });
});
