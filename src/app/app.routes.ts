import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@treinamento-ergon/home').then((m) => m.HomeModule),
  },
  {
    path: 'course',
    loadChildren: () =>
      import('@treinamento-ergon/course-detail').then(
        (m) => m.courseDetailRoutes
      ),
    data: {
      title: 'Cursos',
    },
  },
];
