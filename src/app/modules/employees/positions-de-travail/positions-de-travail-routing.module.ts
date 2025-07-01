import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionsDeTravailRoutes } from './positions-de-travail.routes';
import { GestionDesEmployesComponent } from './gestion-des-employes/gestion-des-employes.component';

const routes: Routes = [
  {
    path: `${PositionsDeTravailRoutes.gestionDesEmployes}`,
    component: GestionDesEmployesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionsDeTravailRoutingModule { }
