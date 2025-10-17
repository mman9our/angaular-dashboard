import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  timeSlots = [
    { period: 1, time: '8:00 - 8:45' },
    { period: 2, time: '8:45 - 9:30' },
    { period: 3, time: '9:30 - 10:15' },
    { period: 4, time: '10:15 - 11:00' },
    { period: 5, time: '11:00 - 11:45' },
    { period: 6, time: '11:45 - 12:30' },
    { period: 7, time: '12:30 - 1:15' },
    { period: 8, time: '1:15 - 2:00' },
  ];
}
