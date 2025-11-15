import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  imports: [MatIconModule],
})
export class SidenavComponent {
  showFiller = false;
}
