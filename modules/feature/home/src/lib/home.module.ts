import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './lib.routes';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
