import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarItem } from '../../models/sidebar-item';
import { NavigationEnd, Router } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  // homeItem: MenuItem = { icon: 'pi pi-home', routerLink: '/app/home' };
  homeItem: MenuItem = { icon: 'pi pi-home', routerLink: '/app/home' };
  private menuItems: SidebarItem[] = [];

  @Output() currentPage = new EventEmitter<SidebarItem>();

  constructor(private router: Router, private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.getMenuItems().subscribe(items => {
      this.menuItems = items;

      this.router.events.pipe(
        filter((event: any) => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.updateBreadcrumb(this.router.url);
      });

      this.updateBreadcrumb(this.router.url);
    });
  }

  private updateBreadcrumb(url: string): void {
    const breadcrumbPath = this.findBreadcrumbPath(url, this.menuItems);

    this.breadcrumbItems = breadcrumbPath;

    const current = breadcrumbPath[breadcrumbPath.length - 1];
    if (current) {
      const matchedItem = this.findItemByRoute(this.menuItems, url);
      if (matchedItem) {
        this.currentPage.emit(matchedItem);
      }
    }
  }

  private findBreadcrumbPath(
    url: string,
    items: SidebarItem[],
    parentPath: MenuItem[] = []
  ): MenuItem[] {
    for (const item of items) {
      const currentPath = [...parentPath];

      if (item.route === url) {
        currentPath.push({ label: item.label, routerLink: item.route });
        return currentPath;
      }

      if (item.children) {
        const childPath = this.findBreadcrumbPath(
          url,
          item.children,
          [...currentPath,
          {
            label: item.label,
            routerLink: item.route || null
          }
          ]);
        if (childPath.length) return childPath;
      }
    }

    return [];
  }

  private findItemByRoute(items: SidebarItem[], route: string): SidebarItem | null {
    for (const item of items) {
      if (item.route === route) {
        return item;
      }

      if (item.children) {
        const found = this.findItemByRoute(item.children, route);
        if (found) return found;
      }
    }

    return null;
  }


}
