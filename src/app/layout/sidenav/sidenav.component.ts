import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface SidenavItem {
  name: string;
  label: string;
  icon: string;
  url?: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  imports: [MatIconModule],
  standalone: true,
})
export class SidenavComponent {
  readonly FIXED_ITEMS: SidenavItem[] = [
    {
      name: 'home',
      label: 'Home',
      icon: 'home',
    },
    {
      name: 'list',
      label: 'Stocks',
      icon: 'list',
      url: '/stocks',
    },
  ];

  selectedItem: SidenavItem['name'] = 'list';
}
