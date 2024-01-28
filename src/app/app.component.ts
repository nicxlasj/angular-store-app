import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListComponent],
  template: '<router-outlet />',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store-app';
}
