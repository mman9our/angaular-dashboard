import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navigationItems = [
    { label: 'برنامج', route: '/schedule' },
    { label: 'ادارة', route: '/management' },
    { label: 'تقارير', route: '/reports' },
    { label: 'استراحة', route: '/break' },
    { label: 'اضطرارات', route: '/emergencies' },
    { label: 'تقارير الغياب', route: '/absence-reports' },
    { label: 'المناوبات', route: '/shifts' },
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
