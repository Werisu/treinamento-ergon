import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseDetailComponent } from './course-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  CourseSearchService,
  mockCourses,
} from '@treinamento-ergon/course-data-access';
import { of } from 'rxjs';

describe('CourseDetailComponent', () => {
  let component: CourseDetailComponent;
  let fixture: ComponentFixture<CourseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CourseDetailComponent,
        RouterTestingModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
      ],
      providers: [
        {
          provide: CourseSearchService,
          useValue: { getById: () => of(mockCourses[0]) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
