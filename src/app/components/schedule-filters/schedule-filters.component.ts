import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CLASSES, TEACHERS, DEFAULT_CLASS, DEFAULT_TEACHER } from './schedule-filters.types';

@Component({
  selector: 'app-schedule-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './schedule-filters.component.html',
  styleUrls: ['./schedule-filters.component.css'],
})
export class ScheduleFiltersComponent implements OnInit {
  // ----------------------------- Outputs -----------------------------

  @Output() filtersChanged = new EventEmitter<{
    selectedClass: string;
    selectedTeacher: string;
  }>();

  // ----------------------------- State -----------------------------

  readonly classes = CLASSES;
  readonly teachers = TEACHERS;

  selectedClass: string = DEFAULT_CLASS;
  selectedTeacher: string = DEFAULT_TEACHER;

  // ----------------------------- Lifecycle -----------------------------

  ngOnInit(): void {
    // Emit initial filters so parent can render default class schedule immediately
    this.emitFilters();
  }

  // ----------------------------- Event Handlers -----------------------------

  onClassChange(): void {
    this.emitFilters();
  }

  onTeacherChange(): void {
    this.emitFilters();
  }

  clearFilters(): void {
    // Reset to first class and all teachers
    this.selectedClass = DEFAULT_CLASS;
    this.selectedTeacher = DEFAULT_TEACHER;
    this.emitFilters();
  }

  // ----------------------------- Private Methods -----------------------------

  private emitFilters(): void {
    this.filtersChanged.emit({
      selectedClass: this.selectedClass,
      selectedTeacher: this.selectedTeacher,
    });
  }
}
