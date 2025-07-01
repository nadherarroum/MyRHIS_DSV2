import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesRoutes } from './employees.routes';

const routes: Routes = [
  {
    path: `${EmployeesRoutes.groupesDeTravail}`,
    loadChildren: () => import('./groupes-de-travail/groupes-de-travail.module')
      .then(m => m.GroupesDeTravailModule)
  },
  {
    path: `${EmployeesRoutes.positionsDeTravail}`,
    loadChildren: () => import('./positions-de-travail/positions-de-travail.module')
      .then(m => m.PositionsDeTravailModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
