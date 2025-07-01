import { Injectable } from '@angular/core';
import { SidebarItem } from '../models/sidebar-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<SidebarItem[]> {
    return this.http.get<SidebarItem[]>('assets/data/menu-items.json');
  }
}
