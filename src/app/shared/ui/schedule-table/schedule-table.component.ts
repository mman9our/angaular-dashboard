import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleFiltersComponent } from '../schedule-filters/schedule-filters.component';

interface Subject {
  id: string;
  name: string;
  teacher: string; // display name (Arabic)
  teacherId: string; // must match filter ids (e.g., 'ahmed-hassan')
  color: string;
  textColor: string;
}

interface Period {
  number: number;
  subjects: Subject[];
}

@Component({
  selector: 'app-schedule-table',
  standalone: true,
  imports: [CommonModule, ScheduleFiltersComponent],
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css'],
})
export class ScheduleTableComponent {
  days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];

  // Subject selection state
  selectedSubjectId: string | null = null;

  // Current filters state
  currentClassId: string = 'grade-1';
  currentTeacherId: string = 'all';

  // Subject color mapping - each subject gets a consistent color
  subjectColors: { [key: string]: { color: string; textColor: string } } = {
    math: { color: 'bg-red-50', textColor: 'text-red-600' },
    arabic: { color: 'bg-violet-50', textColor: 'text-violet-600' },
    hebrew: { color: 'bg-emerald-50', textColor: 'text-emerald-600' },
    islamic: { color: 'bg-amber-50', textColor: 'text-amber-600' },
    sports: { color: 'bg-lime-50', textColor: 'text-lime-600' },
    science: { color: 'bg-cyan-50', textColor: 'text-cyan-600' },
    'life-skills': { color: 'bg-indigo-50', textColor: 'text-indigo-600' },
    art: { color: 'bg-orange-50', textColor: 'text-orange-600' },
    music: { color: 'bg-pink-50', textColor: 'text-pink-600' },
    creativity: { color: 'bg-teal-50', textColor: 'text-teal-600' },
    homeland: { color: 'bg-blue-50', textColor: 'text-blue-600' },
    reading: { color: 'bg-slate-50', textColor: 'text-slate-600' },
    engineering: { color: 'bg-green-50', textColor: 'text-green-600' },
    expression: { color: 'bg-emerald-50', textColor: 'text-emerald-600' },
    'key-to-heart': { color: 'bg-sky-50', textColor: 'text-sky-600' },
    empty: { color: 'bg-white', textColor: 'text-slate-300' },
  };

  getSubjectColor(subjectId: string) {
    return (
      this.subjectColors[subjectId] || { color: 'bg-muted', textColor: 'text-muted-foreground' }
    );
  }

  // Filter handling
  onFiltersChanged(filters: { selectedClass: string; selectedTeacher: string }) {
    this.currentClassId = filters.selectedClass;
    this.currentTeacherId = filters.selectedTeacher;
    this.applyFilters();
  }

  // Subject selection handling
  onSubjectClick(subjectId: string) {
    if (subjectId === 'empty') return;
    if (this.selectedSubjectId === subjectId) {
      // If clicking the same subject, deselect it
      this.selectedSubjectId = null;
    } else {
      // Select the new subject
      this.selectedSubjectId = subjectId;
    }
  }

  // Check if a subject should be highlighted
  isSubjectHighlighted(subjectId: string): boolean {
    return this.selectedSubjectId === subjectId;
  }

  // Check if a subject should be dimmed (not selected but other subjects are)
  isSubjectDimmed(subjectId: string): boolean {
    return this.selectedSubjectId !== null && this.selectedSubjectId !== subjectId;
  }

  // Base schedule used when 'all' classes are selected
  baseSchedule: Period[] = [
    {
      number: 1,
      subjects: [
        {
          id: 'math',
          name: 'الحساب',
          teacher: 'أ. أحمد حسن',
          teacherId: 'ahmed-hassan',
          color: 'bg-red-50',
          textColor: 'text-red-600',
        },
        {
          id: 'arabic',
          name: 'لغة عربية',
          teacher: 'أ. فاطمة علي',
          teacherId: 'fatima-ali',
          color: 'bg-violet-50',
          textColor: 'text-violet-600',
        },
        {
          id: 'hebrew',
          name: 'لغة عبرية',
          teacher: 'أ. سارة أحمد',
          teacherId: 'sara-ahmed',
          color: 'bg-emerald-50',
          textColor: 'text-emerald-600',
        },
        {
          id: 'islamic',
          name: 'الدين الإسلامي',
          teacher: 'أ. محمد عمر',
          teacherId: 'mohammed-omar',
          color: 'bg-amber-50',
          textColor: 'text-amber-600',
        },
        {
          id: 'sports',
          name: 'رياضة',
          teacher: 'أ. خالد محمود',
          teacherId: 'khalid-mahmoud',
          color: 'bg-lime-50',
          textColor: 'text-lime-600',
        },
      ],
    },
    {
      number: 2,
      subjects: [
        {
          id: 'life-skills',
          name: 'مهارات حياتية',
          teacher: 'أ. نور إبراهيم',
          teacherId: 'nour-ibrahim',
          color: 'bg-indigo-50',
          textColor: 'text-indigo-600',
        },
        {
          id: 'music',
          name: 'موسيقى',
          teacher: 'أ. ليلى محمد',
          teacherId: 'layla-mohammed',
          color: 'bg-pink-50',
          textColor: 'text-pink-600',
        },
        {
          id: 'art',
          name: 'رسم',
          teacher: 'أ. يوسف حسن',
          teacherId: 'yousef-hassan',
          color: 'bg-orange-50',
          textColor: 'text-orange-600',
        },
        {
          id: 'creativity',
          name: 'إبداع',
          teacher: 'أ. عمر علي',
          teacherId: 'omar-ali',
          color: 'bg-teal-50',
          textColor: 'text-teal-600',
        },
        {
          id: 'key-to-heart',
          name: 'مفتاح القلب',
          teacher: 'أ. هالة سعيد',
          teacherId: 'hala-said',
          color: 'bg-sky-50',
          textColor: 'text-sky-600',
        },
      ],
    },
    {
      number: 3,
      subjects: [
        {
          id: 'engineering',
          name: 'هندسة',
          teacher: 'أ. يوسف حسن',
          teacherId: 'yousef-hassan',
          color: 'bg-green-50',
          textColor: 'text-green-600',
        },
        {
          id: 'math',
          name: 'الحساب',
          teacher: 'أ. أحمد حسن',
          teacherId: 'ahmed-hassan',
          color: 'bg-red-50',
          textColor: 'text-red-600',
        },
        {
          id: 'math',
          name: 'الحساب',
          teacher: 'أ. أحمد حسن',
          teacherId: 'ahmed-hassan',
          color: 'bg-red-50',
          textColor: 'text-red-600',
        },
        {
          id: 'arabic',
          name: 'لغة عربية',
          teacher: 'أ. فاطمة علي',
          teacherId: 'fatima-ali',
          color: 'bg-violet-50',
          textColor: 'text-violet-600',
        },
        {
          id: 'sports',
          name: 'رياضة',
          teacher: 'أ. خالد محمود',
          teacherId: 'khalid-mahmoud',
          color: 'bg-lime-50',
          textColor: 'text-lime-600',
        },
      ],
    },
    {
      number: 4,
      subjects: [
        {
          id: 'hebrew',
          name: 'لغة عبرية',
          teacher: 'أ. سارة أحمد',
          teacherId: 'sara-ahmed',
          color: 'bg-emerald-50',
          textColor: 'text-emerald-600',
        },
        {
          id: 'life-skills',
          name: 'مهارات حياتية',
          teacher: 'أ. نور إبراهيم',
          teacherId: 'nour-ibrahim',
          color: 'bg-indigo-50',
          textColor: 'text-indigo-600',
        },
        {
          id: 'life-skills',
          name: 'مهارات حياتية',
          teacher: 'أ. نور إبراهيم',
          teacherId: 'nour-ibrahim',
          color: 'bg-indigo-50',
          textColor: 'text-indigo-600',
        },
        {
          id: 'music',
          name: 'موسيقى',
          teacher: 'أ. ليلى محمد',
          teacherId: 'layla-mohammed',
          color: 'bg-pink-50',
          textColor: 'text-pink-600',
        },
        {
          id: 'art',
          name: 'رسم',
          teacher: 'أ. يوسف حسن',
          teacherId: 'yousef-hassan',
          color: 'bg-orange-50',
          textColor: 'text-orange-600',
        },
      ],
    },
    {
      number: 5,
      subjects: [
        {
          id: 'key-to-heart',
          name: 'مفتاح القلب',
          teacher: 'أ. هالة سعيد',
          teacherId: 'hala-said',
          color: 'bg-sky-50',
          textColor: 'text-sky-600',
        },
        {
          id: 'homeland',
          name: 'الموطن',
          teacher: 'أ. فاطمة علي',
          teacherId: 'fatima-ali',
          color: 'bg-blue-50',
          textColor: 'text-blue-600',
        },
        {
          id: 'homeland',
          name: 'الموطن',
          teacher: 'أ. فاطمة علي',
          teacherId: 'fatima-ali',
          color: 'bg-blue-50',
          textColor: 'text-blue-600',
        },
        {
          id: 'math',
          name: 'الحساب',
          teacher: 'أ. أحمد حسن',
          teacherId: 'ahmed-hassan',
          color: 'bg-red-50',
          textColor: 'text-red-600',
        },
        {
          id: 'arabic',
          name: 'لغة عربية',
          teacher: 'أ. فاطمة علي',
          teacherId: 'fatima-ali',
          color: 'bg-violet-50',
          textColor: 'text-violet-600',
        },
      ],
    },
    {
      number: 6,
      subjects: [
        {
          id: 'science',
          name: 'علوم',
          teacher: 'أ. نور إبراهيم',
          teacherId: 'nour-ibrahim',
          color: 'bg-cyan-50',
          textColor: 'text-cyan-600',
        },
        {
          id: 'islamic',
          name: 'الدين الإسلامي',
          teacher: 'أ. محمد عمر',
          teacherId: 'mohammed-omar',
          color: 'bg-amber-50',
          textColor: 'text-amber-600',
        },
        {
          id: 'islamic',
          name: 'الدين الإسلامي',
          teacher: 'أ. محمد عمر',
          teacherId: 'mohammed-omar',
          color: 'bg-amber-50',
          textColor: 'text-amber-600',
        },
        {
          id: 'life-skills',
          name: 'مهارات حياتية',
          teacher: 'أ. نور إبراهيم',
          teacherId: 'nour-ibrahim',
          color: 'bg-indigo-50',
          textColor: 'text-indigo-600',
        },
        {
          id: 'music',
          name: 'موسيقى',
          teacher: 'أ. ليلى محمد',
          teacherId: 'layla-mohammed',
          color: 'bg-pink-50',
          textColor: 'text-pink-600',
        },
      ],
    },
    {
      number: 7,
      subjects: [
        {
          id: 'creativity',
          name: 'إبداع',
          teacher: 'أ. عمر علي',
          teacherId: 'omar-ali',
          color: 'bg-teal-50',
          textColor: 'text-teal-600',
        },
        {
          id: 'engineering',
          name: 'هندسة',
          teacher: 'أ. يوسف حسن',
          teacherId: 'yousef-hassan',
          color: 'bg-green-50',
          textColor: 'text-green-600',
        },
        {
          id: 'engineering',
          name: 'هندسة',
          teacher: 'أ. يوسف حسن',
          teacherId: 'yousef-hassan',
          color: 'bg-green-50',
          textColor: 'text-green-600',
        },
        {
          id: 'homeland',
          name: 'الموطن',
          teacher: 'أ. فاطمة علي',
          teacherId: 'fatima-ali',
          color: 'bg-blue-50',
          textColor: 'text-blue-600',
        },
        {
          id: 'math',
          name: 'الحساب',
          teacher: 'أ. أحمد حسن',
          teacherId: 'ahmed-hassan',
          color: 'bg-red-50',
          textColor: 'text-red-600',
        },
      ],
    },
    {
      number: 8,
      subjects: [
        {
          id: 'sports',
          name: 'رياضة',
          teacher: 'أ. خالد محمود',
          teacherId: 'khalid-mahmoud',
          color: 'bg-lime-50',
          textColor: 'text-lime-600',
        },
        {
          id: 'hebrew',
          name: 'لغة عبرية',
          teacher: 'أ. سارة أحمد',
          teacherId: 'sara-ahmed',
          color: 'bg-emerald-50',
          textColor: 'text-emerald-600',
        },
        {
          id: 'key-to-heart',
          name: 'مفتاح القلب',
          teacher: 'أ. هالة سعيد',
          teacherId: 'hala-said',
          color: 'bg-sky-50',
          textColor: 'text-sky-600',
        },
        {
          id: 'islamic',
          name: 'الدين الإسلامي',
          teacher: 'أ. محمد عمر',
          teacherId: 'mohammed-omar',
          color: 'bg-amber-50',
          textColor: 'text-amber-600',
        },
        {
          id: 'life-skills',
          name: 'مهارات حياتية',
          teacher: 'أ. نور إبراهيم',
          teacherId: 'nour-ibrahim',
          color: 'bg-indigo-50',
          textColor: 'text-indigo-600',
        },
      ],
    },
  ];

  // Create schedules per class (for demo, grade-1 and grade-2 differ slightly)
  schedulesByClass: { [classId: string]: Period[] } = {
    'grade-1': this.baseSchedule,
    'grade-2': this.baseSchedule.map((p) => ({
      number: p.number,
      subjects: p.subjects.map((s, idx) =>
        idx % 2 === 0
          ? { ...s }
          : s.id === 'math'
          ? {
              ...s,
              id: 'science',
              name: 'علوم',
              color: 'bg-cyan-50',
              textColor: 'text-cyan-600',
              teacher: 'أ. نور إبراهيم',
              teacherId: 'nour-ibrahim',
            }
          : { ...s }
      ),
    })),
    // Emphasize Arabic/Islamic and Reading
    'grade-3': this.baseSchedule.map((p) => ({
      number: p.number,
      subjects: p.subjects.map((s) => {
        if (s.id === 'science') {
          return {
            ...s,
            id: 'islamic',
            name: 'الدين الإسلامي',
            color: 'bg-amber-50',
            textColor: 'text-amber-600',
            teacher: 'أ. محمد عمر',
            teacherId: 'mohammed-omar',
          };
        }
        if (s.id === 'art') {
          return {
            ...s,
            id: 'reading',
            name: 'قراءة',
            color: 'bg-slate-50',
            textColor: 'text-slate-600',
            teacher: 'أ. فاطمة علي',
            teacherId: 'fatima-ali',
          };
        }
        return { ...s };
      }),
    })),
    // Swap some STEM/PE with Music and Engineering focus
    'grade-4': this.baseSchedule.map((p) => ({
      number: p.number,
      subjects: p.subjects.map((s) => {
        if (s.id === 'math') {
          return {
            ...s,
            id: 'engineering',
            name: 'هندسة',
            color: 'bg-green-50',
            textColor: 'text-green-600',
            teacher: 'أ. يوسف حسن',
            teacherId: 'yousef-hassan',
          };
        }
        if (s.id === 'sports') {
          return {
            ...s,
            id: 'music',
            name: 'موسيقى',
            color: 'bg-pink-50',
            textColor: 'text-pink-600',
            teacher: 'أ. ليلى محمد',
            teacherId: 'layla-mohammed',
          };
        }
        return { ...s };
      }),
    })),
    // Focus more on Life Skills and Homeland
    'grade-5': this.baseSchedule.map((p) => ({
      number: p.number,
      subjects: p.subjects.map((s) => {
        if (s.id === 'engineering') {
          return {
            ...s,
            id: 'life-skills',
            name: 'مهارات حياتية',
            color: 'bg-indigo-50',
            textColor: 'text-indigo-600',
            teacher: 'أ. نور إبراهيم',
            teacherId: 'nour-ibrahim',
          };
        }
        if (s.id === 'math') {
          return {
            ...s,
            id: 'homeland',
            name: 'الموطن',
            color: 'bg-blue-50',
            textColor: 'text-blue-600',
            teacher: 'أ. فاطمة علي',
            teacherId: 'fatima-ali',
          };
        }
        return { ...s };
      }),
    })),
  };

  // Final schedule rendered after applying filters
  schedule: Period[] = this.schedulesByClass['grade-1'];

  // Apply current filters to compute schedule
  private applyFilters() {
    const classId = this.currentClassId;
    const teacherId = this.currentTeacherId;

    // Determine base by class
    const base = this.schedulesByClass[classId] ?? this.schedulesByClass['grade-1'];

    // Filter by teacher if needed, but keep 5-day structure with placeholders
    if (teacherId !== 'all') {
      this.schedule = base.map((period) => ({
        number: period.number,
        subjects: period.subjects.map((subj) =>
          subj.teacherId === teacherId
            ? subj
            : {
                id: 'empty',
                name: '',
                teacher: '',
                teacherId: 'empty',
                color: '',
                textColor: '',
              }
        ),
      }));
    } else {
      this.schedule = base;
    }
  }
}
