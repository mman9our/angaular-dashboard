import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleTableComponent } from '../../../../shared/ui/schedule-table/schedule-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ScheduleTableComponent],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css'],
})
export class DashboardPage {
  // Dashboard page content can be added here
}
