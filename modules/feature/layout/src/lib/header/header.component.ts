import { Component, Input } from '@angular/core';

@Component({
  selector: 'treinamento-ergon-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input({ required: true }) title = '';
}
