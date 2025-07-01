import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningRoutes } from './planning.routes';
import { GestionDesPlanningComponent } from './gestion-des-planning/gestion-des-planning.component';

const routes: Routes = [
  {
    path: `${PlanningRoutes.gestionDuPlanning}`,
    component: GestionDesPlanningComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { }
