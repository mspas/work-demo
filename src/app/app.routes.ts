import { Routes } from '@angular/router';
import { stockRoutes } from './features/stock/stock.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'stocks', pathMatch: 'full' },
  { path: 'stocks', children: stockRoutes },
  { path: '**', redirectTo: 'stocks' },
];
