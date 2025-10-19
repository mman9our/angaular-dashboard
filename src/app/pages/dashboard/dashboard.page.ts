import { Component } from '@angular/core';
import { ScheduleTableComponent } from '../../components';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ScheduleTableComponent],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css'],
})
export class DashboardPage {}
