// ----------------------------- Types & Constants -----------------------------

export interface FilterOption {
  id: string;
  name: string;
}

export const CLASSES: ReadonlyArray<FilterOption> = [
  { id: 'grade-1', name: 'الصف الأول' },
  { id: 'grade-2', name: 'الصف الثاني' },
  { id: 'grade-3', name: 'الصف الثالث' },
];

export const TEACHERS: ReadonlyArray<FilterOption> = [
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

export const DEFAULT_CLASS = 'grade-1';
export const DEFAULT_TEACHER = 'all';
