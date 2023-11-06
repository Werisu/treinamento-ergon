import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LayoutModule } from '@treinamento-ergon/layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseSearchComponent } from '@treinamento-ergon/course-search';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    LayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CourseSearchComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
