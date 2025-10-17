import { Component, EventEmitter, Output } from '@angular/core';
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
export class ScheduleFiltersComponent {
  @Output() filtersChanged = new EventEmitter<{
    selectedClass: string;
    selectedTeacher: string;
  }>();

  // Sample data for classes
  classes: FilterOption[] = [
    { id: 'all', name: 'جميع الصفوف' },
    { id: 'grade-1', name: 'الصف الأول' },
    { id: 'grade-2', name: 'الصف الثاني' },
    { id: 'grade-3', name: 'الصف الثالث' },
    { id: 'grade-4', name: 'الصف الرابع' },
    { id: 'grade-5', name: 'الصف الخامس' },
    { id: 'grade-6', name: 'الصف السادس' },
    { id: 'grade-7', name: 'الصف السابع' },
    { id: 'grade-8', name: 'الصف الثامن' },
    { id: 'grade-9', name: 'الصف التاسع' },
    { id: 'grade-10', name: 'الصف العاشر' },
    { id: 'grade-11', name: 'الصف الحادي عشر' },
    { id: 'grade-12', name: 'الصف الثاني عشر' },
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

  selectedClass: string = 'all';
  selectedTeacher: string = 'all';

  onClassChange() {
    this.emitFilters();
  }

  onTeacherChange() {
    this.emitFilters();
  }

  clearFilters() {
    this.selectedClass = 'all';
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
