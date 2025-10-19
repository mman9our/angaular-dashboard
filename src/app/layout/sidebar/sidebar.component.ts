import { Component } from '@angular/core';

interface NavItem {
  id: string;
  title: string;
  icon: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  navItems: NavItem[] = [
    {
      id: 'nav-dashboard',
      title: 'لوحة التحكم',
      icon: '📊',
      isActive: true,
    },
    {
      id: 'nav-schedule',
      title: 'الجدول الدراسي',
      icon: '📅',
    },
    {
      id: 'nav-students',
      title: 'الطلاب',
      icon: '👥',
    },
    {
      id: 'nav-teachers',
      title: 'المعلمون',
      icon: '👨‍🏫',
    },
    {
      id: 'nav-classes',
      title: 'الصفوف',
      icon: '🏫',
    },
    {
      id: 'nav-subjects',
      title: 'المواد الدراسية',
      icon: '📚',
    },
    {
      id: 'nav-reports',
      title: 'التقارير',
      icon: '📈',
    },
    {
      id: 'nav-settings',
      title: 'الإعدادات',
      icon: '⚙️',
    },
  ];

  setActiveItem(activeItem: NavItem) {
    this.navItems.forEach((item) => (item.isActive = false));
    activeItem.isActive = true;
  }
}
