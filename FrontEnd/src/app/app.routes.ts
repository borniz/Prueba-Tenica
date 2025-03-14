import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'destination-selection',
    loadComponent: () =>
      import(
        './pages/destination-selection/destination-selection.component'
      ).then((m) => m.DestinationSelectionComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'budget',
    loadComponent: () =>
      import('./pages/budget/budget.component').then((m) => m.BudgetComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'results',
    loadComponent: () =>
      import('./pages/results/results.component').then(
        (m) => m.ResultsComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'record',
    loadComponent: () =>
      import('./pages/record/record.component').then((m) => m.RecordComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'login' },
];
