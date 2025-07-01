import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrevisionsRoutingModule } from './previsions-routing.module';
import { GestionDesPrevisionsComponent } from './gestion-des-previsions/gestion-des-previsions.component';


@NgModule({
  declarations: [
    GestionDesPrevisionsComponent
  ],
  imports: [
    CommonModule,
    PrevisionsRoutingModule
  ]
})
export class PrevisionsModule { }
