import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningRoutingModule } from './planning-routing.module';
import { GestionDesPlanningComponent } from './gestion-des-planning/gestion-des-planning.component';


@NgModule({
  declarations: [
    GestionDesPlanningComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule
  ]
})
export class PlanningModule { }
