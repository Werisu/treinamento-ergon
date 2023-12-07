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
});
