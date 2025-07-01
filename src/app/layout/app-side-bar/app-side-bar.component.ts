import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-side-bar',
  templateUrl: './app-side-bar.component.html',
  styleUrl: './app-side-bar.component.scss'
})
export class AppSideBarComponent {

  @Input() isCollapsed = false;

  menuItems: any[] = [];
  activeRoute: string = '';

  constructor(private http: HttpClient, private router: Router) {
    this.activeRoute = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = this.router.url;
      }
    });
  }

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/menu-items.json')
      .subscribe(data => {
        this.menuItems = data;
      });
  }

  onMenuItemClick(item: any): void {
    if (item.children?.length) {
      item.expanded = !item.expanded;
    }

    if (item.route) {
      this.router.navigate([item.route]);
    }
  }

}
