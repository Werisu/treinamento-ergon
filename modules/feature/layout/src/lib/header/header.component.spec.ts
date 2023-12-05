import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';

const mockImage = 'caminho/para/sua/imagem.jpg';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.src = mockImage;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain image', () => {
    const header: HTMLHeadingElement =
      fixture.nativeElement.querySelector('header');
    const imgElement: HTMLImageElement =
      fixture.debugElement.nativeElement.querySelector('img');
    expect(header.querySelector('img')).toBeTruthy();

    expect(imgElement.getAttribute('src')).toBe(mockImage); // Verifique se o atributo src da imagem corresponde ao valor definido em component.src.
    expect(imgElement.getAttribute('alt')).toBe('Logo Ergon'); // Verifique se o atributo alt da imagem está definido corretamente.
  });

  it('should redirect to "/" when logo is clicked', () => {
    const anchor: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(anchor.getAttribute('href')).toBe('/');
  });
});
