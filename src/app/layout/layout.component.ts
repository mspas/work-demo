import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SidenavComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
}
