import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseSearchComponent } from './course-search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSearchComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});