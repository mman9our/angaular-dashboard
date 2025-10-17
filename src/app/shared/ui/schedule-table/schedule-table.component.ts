import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleFiltersComponent } from '../schedule-filters/schedule-filters.component';

interface Subject {
  id: string;
  name: string;
  teacher: string;
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

  // Subject color mapping - each subject gets a consistent color with modern design
  subjectColors: { [key: string]: { color: string; textColor: string } } = {
    math: { color: 'bg-red-50', textColor: 'text-red-600' }, // الحساب - Modern Red
    arabic: { color: 'bg-violet-50', textColor: 'text-violet-600' }, // لغة عربية - Modern Purple
    hebrew: { color: 'bg-emerald-50', textColor: 'text-emerald-600' }, // لغة عبرية - Modern Green
    islamic: { color: 'bg-amber-50', textColor: 'text-amber-600' }, // الدين الإسلامي - Modern Orange
    sports: { color: 'bg-lime-50', textColor: 'text-lime-600' }, // رياضة - Modern Lime
    science: { color: 'bg-cyan-50', textColor: 'text-cyan-600' }, // علوم - Modern Cyan
    'life-skills': { color: 'bg-indigo-50', textColor: 'text-indigo-600' }, // مهارات حياتية - Modern Indigo
    art: { color: 'bg-orange-50', textColor: 'text-orange-600' }, // رسم - Modern Orange
    music: { color: 'bg-pink-50', textColor: 'text-pink-600' }, // موسيقى - Modern Pink
    creativity: { color: 'bg-teal-50', textColor: 'text-teal-600' }, // إبداع - Modern Teal
    homeland: { color: 'bg-blue-50', textColor: 'text-blue-600' }, // الموطن - Modern Blue
    reading: { color: 'bg-slate-50', textColor: 'text-slate-600' }, // مطالعة - Modern Slate
    engineering: { color: 'bg-green-50', textColor: 'text-green-600' }, // هندسة - Modern Green
    expression: { color: 'bg-emerald-50', textColor: 'text-emerald-600' }, // تعبير - Modern Emerald
    'key-to-heart': { color: 'bg-sky-50', textColor: 'text-sky-600' }, // مفتاح القلب - Modern Sky
  };

  getSubjectColor(subjectId: string) {
    return (
      this.subjectColors[subjectId] || { color: 'bg-muted', textColor: 'text-muted-foreground' }
    );
  }

  // Filter handling
  onFiltersChanged(filters: { selectedClass: string; selectedTeacher: string }) {}

  // Subject selection handling
  onSubjectClick(subjectId: string) {
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

  schedule: Period[] = [
    {
      number: 1,
      subjects: [
        {
          id: 'math',
          name: 'الحساب',
          teacher: 'أ. أحمد محمد',
          color: 'bg-red-50',
          textColor: 'text-red-600',
        },
        {
          id: 'arabic',
          name: 'لغة عربية',
          teacher: 'أ. فاطمة علي',
          color: 'bg-violet-50',
          textColor: 'text-violet-600',
        },
        {
          id: 'hebrew',
          name: 'لغة عبرية',
          teacher: 'أ. سارة أحمد',
          color: 'bg-emerald-50',
          textColor: 'text-emerald-600',
        },
        {
          id: 'islamic',
          name: 'الدين الإسلامي',
          teacher: 'أ. محمد حسن',
          color: 'bg-amber-50',
          textColor: 'text-amber-600',
        },
        {
          id: 'sports',
          name: 'رياضة',
          teacher: 'أ. خالد محمود',
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
          teacher: 'أ. ريم عبدالله',
          color: 'bg-indigo-50',
          textColor: 'text-indigo-600',
        },
        {
          id: 'music',
          name: 'موسيقى',
          teacher: 'أ. ليلى محمد',
          color: 'bg-pink-50',
          textColor: 'text-pink-600',
        },
        {
          id: 'art',
          name: 'رسم',
          teacher: 'أ. سامي أحمد',
          color: 'bg-orange-50',
          textColor: 'text-orange-600',
        },
        {
          id: 'creativity',
          name: 'إبداع',
          teacher: 'أ. نورا سالم',
          color: 'bg-teal-50',
          textColor: 'text-teal-600',
        },
        {
          id: 'key-to-heart',
          name: 'مفتاح القلب',
          teacher: 'أ. مريم علي',
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
          teacher: 'أ. علي محمود',
          color: 'bg-green-50',
          textColor: 'text-green-600',
        },
        {
          id: 'math',
          name: 'الحساب',
          teacher: 'أ. أحمد محمد',
          color: 'bg-red-50',
          textColor: 'text-red-600',
        },
        {
          id: 'math',
          name: 'الحساب',
          teacher: 'أ. أحمد محمد',
          color: 'bg-red-50',
          textColor: 'text-red-600',
        },
        {
          id: 'arabic',
          name: 'لغة عربية',
          teacher: 'أ. فاطمة علي',
          color: 'bg-violet-50',
          textColor: 'text-violet-600',
        },
        {
          id: 'sports',
          name: 'رياضة',
          teacher: 'أ. خالد محمود',
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
          color: 'bg-emerald-50',
          textColor: 'text-emerald-600',
        },
        {
          id: 'life-skills',
          name: 'مهارات حياتية',
          teacher: 'أ. ريم عبدالله',
          color: 'bg-indigo-50',
          textColor: 'text-indigo-600',
        },
        {
          id: 'life-skills',
          name: 'مهارات حياتية',
          teacher: 'أ. ريم عبدالله',
          color: 'bg-indigo-50',
          textColor: 'text-indigo-600',
        },
        {
          id: 'music',
          name: 'موسيقى',
          teacher: 'أ. ليلى محمد',
          color: 'bg-pink-50',
          textColor: 'text-pink-600',
        },
        {
          id: 'art',
          name: 'رسم',
          teacher: 'أ. سامي أحمد',
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
          teacher: 'أ. مريم علي',
          color: 'bg-sky-50',
          textColor: 'text-sky-600',
        },
        {
          id: 'homeland',
          name: 'الموطن',
          teacher: 'أ. فاطمة حسن',
          color: 'bg-blue-50',
          textColor: 'text-blue-600',
        },
        {
          id: 'homeland',
          name: 'الموطن',
          teacher: 'أ. فاطمة حسن',
          color: 'bg-blue-50',
          textColor: 'text-blue-600',
        },
        {
          id: 'math',
          name: 'الحساب',
          teacher: 'أ. أحمد محمد',
          color: 'bg-red-50',
          textColor: 'text-red-600',
        },
        {
          id: 'arabic',
          name: 'لغة عربية',
          teacher: 'أ. فاطمة علي',
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
          teacher: 'أ. نور الدين',
          color: 'bg-cyan-50',
          textColor: 'text-cyan-600',
        },
        {
          id: 'islamic',
          name: 'الدين الإسلامي',
          teacher: 'أ. محمد حسن',
          color: 'bg-amber-50',
          textColor: 'text-amber-600',
        },
        {
          id: 'islamic',
          name: 'الدين الإسلامي',
          teacher: 'أ. محمد حسن',
          color: 'bg-amber-50',
          textColor: 'text-amber-600',
        },
        {
          id: 'life-skills',
          name: 'مهارات حياتية',
          teacher: 'أ. ريم عبدالله',
          color: 'bg-indigo-50',
          textColor: 'text-indigo-600',
        },
        {
          id: 'music',
          name: 'موسيقى',
          teacher: 'أ. ليلى محمد',
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
          teacher: 'أ. نورا سالم',
          color: 'bg-teal-50',
          textColor: 'text-teal-600',
        },
        {
          id: 'engineering',
          name: 'هندسة',
          teacher: 'أ. علي محمود',
          color: 'bg-green-50',
          textColor: 'text-green-600',
        },
        {
          id: 'engineering',
          name: 'هندسة',
          teacher: 'أ. علي محمود',
          color: 'bg-green-50',
          textColor: 'text-green-600',
        },
        {
          id: 'homeland',
          name: 'الموطن',
          teacher: 'أ. فاطمة حسن',
          color: 'bg-blue-50',
          textColor: 'text-blue-600',
        },
        {
          id: 'math',
          name: 'الحساب',
          teacher: 'أ. أحمد محمد',
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
          color: 'bg-lime-50',
          textColor: 'text-lime-600',
        },
        {
          id: 'hebrew',
          name: 'لغة عبرية',
          teacher: 'أ. سارة أحمد',
          color: 'bg-emerald-50',
          textColor: 'text-emerald-600',
        },
        {
          id: 'key-to-heart',
          name: 'مفتاح القلب',
          teacher: 'أ. مريم علي',
          color: 'bg-sky-50',
          textColor: 'text-sky-600',
        },
        {
          id: 'islamic',
          name: 'الدين الإسلامي',
          teacher: 'أ. محمد حسن',
          color: 'bg-amber-50',
          textColor: 'text-amber-600',
        },
        {
          id: 'life-skills',
          name: 'مهارات حياتية',
          teacher: 'أ. ريم عبدالله',
          color: 'bg-indigo-50',
          textColor: 'text-indigo-600',
        },
      ],
    },
  ];
}
