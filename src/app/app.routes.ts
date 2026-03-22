import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.Login)
  },
  {
    path: 'auth/profile',
    loadComponent: () =>
      import('./features/auth/profile/profile')
        .then(m => m.Profile)
  }
];
