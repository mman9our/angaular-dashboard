// ----------------------------- Types & Constants -----------------------------

export type ClassId = 'grade-1' | 'grade-2' | 'grade-3' | string;
export type TeacherId = 'all' | 'empty' | string;
export type SubjectId =
  | 'math'
  | 'arabic'
  | 'hebrew'
  | 'islamic'
  | 'sports'
  | 'science'
  | 'life-skills'
  | 'art'
  | 'music'
  | 'creativity'
  | 'homeland'
  | 'reading'
  | 'engineering'
  | 'expression'
  | 'key-to-heart'
  | 'empty'
  | string;

export interface Subject {
  id: SubjectId;
  name: string;
  teacher: string; // display name (Arabic)
  teacherId: TeacherId; // must match filter ids (e.g., 'ahmed-hassan')
  color: string;
  textColor: string;
}

export interface Period {
  number: number;
  subjects: Subject[]; // one subject per day aligned with DAYS order
}

export type SchedulesByClass = Record<ClassId, Period[]>;

export const DAYS: ReadonlyArray<{ id: string; name: string }> = [
  { id: 'sunday', name: 'الأحد' },
  { id: 'monday', name: 'الاثنين' },
  { id: 'tuesday', name: 'الثلاثاء' },
  { id: 'wednesday', name: 'الأربعاء' },
  { id: 'thursday', name: 'الخميس' },
];

export const EMPTY_SUBJECT: Subject = {
  id: 'empty',
  name: '',
  teacher: '',
  teacherId: 'empty',
  color: '',
  textColor: '',
};

export const SUBJECT_COLORS: Readonly<Record<string, { color: string; textColor: string }>> = {
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
