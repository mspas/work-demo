import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SidenavComponent, MatSidenavModule, MatButtonModule, MatIconModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
})
export class LayoutComponent {
  isExpanded = true;

  toggleDrawer() {
    this.isExpanded = !this.isExpanded;
  }
}
