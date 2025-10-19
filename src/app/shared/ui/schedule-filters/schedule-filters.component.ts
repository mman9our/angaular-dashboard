import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FilterOption {
  id: string;
  name: string;
}

@Component({
  selector: 'app-schedule-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './schedule-filters.component.html',
  styleUrls: ['./schedule-filters.component.css'],
})
export class ScheduleFiltersComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<{
    selectedClass: string;
    selectedTeacher: string;
  }>();

  // Sample data for classes
  classes: FilterOption[] = [
    { id: 'grade-1', name: 'الصف الأول' },
    { id: 'grade-2', name: 'الصف الثاني' },
    { id: 'grade-3', name: 'الصف الثالث' },
    { id: 'grade-4', name: 'الصف الرابع' },
    { id: 'grade-5', name: 'الصف الخامس' },
  ];

  // Sample data for teachers
  teachers: FilterOption[] = [
    { id: 'all', name: 'جميع المدرسين' },
    { id: 'ahmed-hassan', name: 'أحمد حسن' },
    { id: 'fatima-ali', name: 'فاطمة علي' },
    { id: 'mohammed-omar', name: 'محمد عمر' },
    { id: 'sara-ahmed', name: 'سارة أحمد' },
    { id: 'khalid-mahmoud', name: 'خالد محمود' },
    { id: 'nour-ibrahim', name: 'نور إبراهيم' },
    { id: 'yousef-hassan', name: 'يوسف حسن' },
    { id: 'layla-mohammed', name: 'ليلى محمد' },
    { id: 'omar-ali', name: 'عمر علي' },
    { id: 'hala-said', name: 'هالة سعيد' },
  ];

  selectedClass: string = 'grade-1';
  selectedTeacher: string = 'all';

  ngOnInit(): void {
    // Emit initial filters so parent can render default class schedule immediately
    this.emitFilters();
  }

  onClassChange() {
    this.emitFilters();
  }

  onTeacherChange() {
    this.emitFilters();
  }

  clearFilters() {
    // Reset to first class and all teachers
    this.selectedClass = this.classes[0]?.id ?? 'grade-1';
    this.selectedTeacher = 'all';
    this.emitFilters();
  }

  private emitFilters() {
    this.filtersChanged.emit({
      selectedClass: this.selectedClass,
      selectedTeacher: this.selectedTeacher,
    });
  }
}
