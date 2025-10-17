import { Component } from '@angular/core';
import { MainLayoutComponent } from './shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
