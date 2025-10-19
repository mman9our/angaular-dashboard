import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
];
