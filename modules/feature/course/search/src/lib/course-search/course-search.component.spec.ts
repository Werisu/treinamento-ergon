import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { CourseSearchComponent } from './course-search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  CourseSearchService,
  mockCourses,
} from '@treinamento-ergon/course-data-access';
import { of } from 'rxjs';

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;
  let courseSearchService: CourseSearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSearchComponent, NoopAnimationsModule],
      providers: [
        {
          provide: CourseSearchService, // QUANDO O COMPONENTE OLHAR O SERVICE
          useValue: { searchByTitle: () => of(mockCourses) }, // NA VERDADE ELE VAI USAR ESSE VALOR
        },
      ],
    }).compileComponents();

    courseSearchService = TestBed.inject(CourseSearchService);
    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should debounce when input field is changed', fakeAsync(() => {
    jest.spyOn(courseSearchService, 'searchByTitle');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = 'titulo';
    input.dispatchEvent(new Event('input'));
    expect(courseSearchService.searchByTitle).not.toHaveBeenCalled();
    tick(500);
    expect(courseSearchService.searchByTitle).toHaveBeenCalledWith(input.value);
  }));

  it('should search multiple times', fakeAsync(() => {
    jest.spyOn(courseSearchService, 'searchByTitle');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = 'titulo';
    input.dispatchEvent(new Event('input'));
    tick(500);

    input.value = 'titulo 3';
    input.dispatchEvent(new Event('input'));
    tick(500);

    expect(courseSearchService.searchByTitle).toHaveBeenCalledTimes(2);
  }));

  it('should prevent identical submissions', fakeAsync(() => {
    jest.spyOn(courseSearchService, 'searchByTitle');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = 'titulo 3';
    input.dispatchEvent(new Event('input'));
    tick(500);

    input.value = 'titulo 3';
    input.dispatchEvent(new Event('input'));
    tick(500);

    expect(courseSearchService.searchByTitle).toHaveBeenCalledTimes(1);
  }));

  it('should prevent empty submissions', fakeAsync(() => {
    jest.spyOn(courseSearchService, 'searchByTitle');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = '';
    input.dispatchEvent(new Event('input'));
    tick(500);

    expect(courseSearchService.searchByTitle).not.toHaveBeenCalled();
  }));

  it('should return products observable correctly', () => {
    component.courses$.subscribe((result) => {
      expect(result).toEqual(mockCourses);
    });
  });
});
