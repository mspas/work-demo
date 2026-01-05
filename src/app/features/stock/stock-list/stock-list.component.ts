import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MOCK_STOCKS, StockListItem } from '../models/stock-list.model';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterLink, MatIconModule, MatTooltipModule],
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent {
  stocks: StockListItem[] = MOCK_STOCKS;

  displayedColumns: string[] = ['flag', 'symbol', 'name', 'exchange', 'sector', 'price', 'change'];
}
