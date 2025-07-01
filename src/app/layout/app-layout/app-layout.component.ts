import { Component } from '@angular/core';
import { SidebarItem } from '../../shared/models/sidebar-item';
import { EmployeeAvatar } from '../../models/employees/employee-avatar';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

  isSidebarCollapsed = false;
  currentPage: SidebarItem | null = null;

  allAvatars: EmployeeAvatar[] = [
    { name: 'Nadher', photoUrl: 'assets/images/default-avatar.png' },
    { name: 'Bob', photoUrl: 'assets/images/img-3.jpg' },
    { name: 'Charlie', photoUrl: 'assets/images/img-2.jpg' },
    { name: 'Diana', photoUrl: 'assets/images/img-4.png' },
    { name: 'Eve', photoUrl: 'assets/images/img-1.jpg' },
  ];

  maxDisplayedAvatars = 4;

  get displayedAvatars(): EmployeeAvatar[] {
    return this.allAvatars.slice(0, this.maxDisplayedAvatars);
  }

  get extraAvatarsCount(): number {
    return Math.max(0, this.allAvatars.length - this.maxDisplayedAvatars);
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onCurrentPageChange(page: SidebarItem) {
    this.currentPage = page;
  }

  onAddEmployee() {
    console.log('Ajouter un employee!');
  }
}
