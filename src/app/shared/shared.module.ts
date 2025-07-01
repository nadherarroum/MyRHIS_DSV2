import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { SidebarModule } from 'primeng/sidebar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const _primengModules = [
  ButtonModule,
  ButtonGroupModule,
  SidebarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ..._primengModules
  ],
  exports: [
    ..._primengModules
  ]
})
export class SharedModule { }
