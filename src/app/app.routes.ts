import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';

export const routes: Routes = [
  {
    path: '',
    title: 'لوحة التحكم',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    title: 'لوحة التحكم',
    component: DashboardPage,
  },
  {
    path: '**',
    title: 'لوحة التحكم',
    redirectTo: '/dashboard',
  },
];
