import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'destination-selection',
    pathMatch: 'full',
  },
  {
    path: 'destination-selection',
    loadComponent: () =>
      import(
        './pages/destination-selection/destination-selection.component'
      ).then((m) => m.DestinationSelectionComponent),
  },
  {
    path: 'budget',
    loadComponent: () =>
      import('./pages/budget/budget.component').then((m) => m.BudgetComponent),
  },
  {
    path: 'results',
    loadComponent: () =>
      import('./pages/results/results.component').then(
        (m) => m.ResultsComponent
      ),
  },
];
