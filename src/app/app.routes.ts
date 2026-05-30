import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/pos-layout/pos-layout').then((m) => m.PosLayout),
  },
];
