import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDesPrevisionsComponent } from './gestion-des-previsions/gestion-des-previsions.component';
import { PrevisionsRoutes } from './previsions.routes';

const routes: Routes = [
  {
    path: `${PrevisionsRoutes.gestionDesPrevisions}`,
    component: GestionDesPrevisionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrevisionsRoutingModule { }
