import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ScheduleFiltersComponent } from '../schedule-filters/schedule-filters.component';
import {
  ClassId,
  TeacherId,
  SubjectId,
  Period,
  SchedulesByClass,
  DAYS,
  EMPTY_SUBJECT,
  SUBJECT_COLORS,
} from './schedule-table.types';

@Component({
  selector: 'app-schedule-table',
  standalone: true,
  imports: [CommonModule, ScheduleFiltersComponent],
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css'],
})
export class ScheduleTableComponent implements OnInit {
  // ----------------------------- State -----------------------------

  readonly days = DAYS;

  /** External data keyed by classId */
  private schedulesByClass: SchedulesByClass = {};

  /** Final schedule rendered after applying filters */
  schedule: Period[] = [];

  /** Subject currently highlighted by user click */
  selectedSubjectId: SubjectId | null = null;

  /** Current filters */
  currentClassId: ClassId = 'grade-1';
  currentTeacherId: TeacherId = 'all';

  // ----------------------------- Setup -----------------------------

  private readonly http = inject(HttpClient);
  private readonly schedulesUrl = 'data/schedules.json';

  ngOnInit(): void {
    this.http.get<SchedulesByClass>(this.schedulesUrl).subscribe({
      next: (data) => {
        if (!data || !Object.keys(data).length) return;

        this.schedulesByClass = data;
        this.applyFilters();
      },
      error: () => {
        // optional: show a toast/snackbar
        this.schedulesByClass = {};
        this.schedule = [];
      },
    });
  }

  // ----------------------------- Event Handlers -----------------------------

  onFiltersChanged(filters: { selectedClass: ClassId; selectedTeacher: TeacherId }): void {
    this.currentClassId = filters.selectedClass;
    this.currentTeacherId = filters.selectedTeacher;
    this.applyFilters();
  }

  onSubjectClick(subjectId: SubjectId): void {
    if (subjectId === 'empty') return;
    this.selectedSubjectId = this.selectedSubjectId === subjectId ? null : subjectId;
  }

  // ----------------------------- View Helpers -----------------------------

  getSubjectColor(subjectId: SubjectId): { color: string; textColor: string } {
    return SUBJECT_COLORS[subjectId] ?? { color: 'bg-muted', textColor: 'text-muted-foreground' };
  }

  isSubjectHighlighted(subjectId: SubjectId): boolean {
    return this.selectedSubjectId === subjectId;
  }

  isSubjectDimmed(subjectId: SubjectId): boolean {
    return this.selectedSubjectId !== null && this.selectedSubjectId !== subjectId;
  }

  // ----------------------------- Private Methods -----------------------------

  /** Applies current filters to compute `schedule` */
  private applyFilters(): void {
    const base = this.schedulesByClass[this.currentClassId] ?? [];

    if (this.currentTeacherId === 'all') {
      this.schedule = base;
      return;
    }

    // Keep structure; replace non-matching teacher cells with EMPTY_SUBJECT
    this.schedule = base.map((period) => ({
      number: period.number,
      subjects: period.subjects.map((subj) =>
        subj.teacherId === this.currentTeacherId ? subj : EMPTY_SUBJECT
      ),
    }));
  }
}
