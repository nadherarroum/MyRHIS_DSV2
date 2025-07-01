import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { InfoCardComponent } from './components/info-card/info-card.component';

const _primengModules = [
  ButtonModule,
  ButtonGroupModule,
  SidebarModule,
  DropdownModule,
  BreadcrumbModule,
  CardModule
];

const myComponents = [
  AvatarComponent,
  BreadcrumbComponent
]

@NgModule({
  declarations: [
    ...myComponents,
    InfoCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ..._primengModules
  ],
  exports: [
    ..._primengModules, ...myComponents
  ]
})
export class SharedModule { }
