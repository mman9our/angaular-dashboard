import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navigationItems = [
    { id: 'nav-schedule', label: 'برنامج', route: '/schedule' },
    { id: 'nav-management', label: 'ادارة', route: '/management' },
    { id: 'nav-reports', label: 'تقارير', route: '/reports' },
    { id: 'nav-break', label: 'استراحة', route: '/break' },
    { id: 'nav-emergencies', label: 'اضطرارات', route: '/emergencies' },
    { id: 'nav-absence-reports', label: 'تقارير الغياب', route: '/absence-reports' },
    { id: 'nav-shifts', label: 'المناوبات', route: '/shifts' },
  ];

  currentUser = {
    name: 'Super Admin',
    role: 'مدير النظام',
  };

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
