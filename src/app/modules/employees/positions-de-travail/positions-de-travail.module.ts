import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionsDeTravailRoutingModule } from './positions-de-travail-routing.module';
import { GestionDesEmployesComponent } from './gestion-des-employes/gestion-des-employes.component';


@NgModule({
  declarations: [
    GestionDesEmployesComponent
  ],
  imports: [
    CommonModule,
    PositionsDeTravailRoutingModule
  ]
})
export class PositionsDeTravailModule { }
