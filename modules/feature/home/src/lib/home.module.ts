import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './lib.routes';
import { HomeComponent } from './home/home.component';
import { CourseCardComponent } from '@treinamento-ergon/course-ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    CourseCardComponent,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
