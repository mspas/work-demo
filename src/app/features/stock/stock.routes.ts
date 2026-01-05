import { Routes } from '@angular/router';
import { StockListComponent } from './stock-list/stock-list.component';

export const stockRoutes: Routes = [
  { path: '', component: StockListComponent },
  { path: ':symbol', component: StockListComponent },
];
