import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SubheaderComponent } from './subheader/subheader.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  declarations: [HeaderComponent, SubheaderComponent],
  exports: [HeaderComponent, SubheaderComponent],
})
export class LayoutModule {}
