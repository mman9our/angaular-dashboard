import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  title: string;
  route: string;
  icon: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  navItems: NavItem[] = [
    {
      title: 'لوحة التحكم',
      route: '/dashboard',
      icon: '📊',
      isActive: true,
    },
    {
      title: 'الجدول الدراسي',
      route: '/dashboard/schedule',
      icon: '📅',
    },
    {
      title: 'الطلاب',
      route: '/dashboard/students',
      icon: '👥',
    },
    {
      title: 'المعلمون',
      route: '/dashboard/teachers',
      icon: '👨‍🏫',
    },
    {
      title: 'الصفوف',
      route: '/dashboard/classes',
      icon: '🏫',
    },
    {
      title: 'المواد الدراسية',
      route: '/dashboard/subjects',
      icon: '📚',
    },
    {
      title: 'التقارير',
      route: '/dashboard/reports',
      icon: '📈',
    },
    {
      title: 'الإعدادات',
      route: '/dashboard/settings',
      icon: '⚙️',
    },
  ];

  setActiveItem(activeItem: NavItem) {
    this.navItems.forEach((item) => (item.isActive = false));
    activeItem.isActive = true;
  }
}
