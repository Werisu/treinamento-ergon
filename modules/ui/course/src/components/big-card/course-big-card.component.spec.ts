import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseBigCardComponent } from './course-big-card.component';

describe('CourseBigCardComponent', () => {
  let component: CourseBigCardComponent;
  let fixture: ComponentFixture<CourseBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseBigCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render big card correctly', () => {
    const cards: HTMLElement[] = fixture.nativeElement.querySelectorAll(
      '.home__banner__text'
    );
    expect(cards.length).toBe(1);
    expect(cards[0].textContent).toContain(
      'Excelência em Aprendizado com o Portal de Treinamento Ergon Sistema'
    );
  });
});
