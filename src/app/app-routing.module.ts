import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app.routes';
import { InvalidRouteComponent } from './components/invalid-route/invalid-route.component';
import { HomeComponent } from './components/home/home.component';
import { AccessDeniedComponent } from './account/access-denied/access-denied.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

const childModuleRoutes = [
  {
    path: `${AppRoutes.employees}`,
    loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: `${AppRoutes.planning}`,
    loadChildren: () => import('./modules/planning/planning.module').then(m => m.PlanningModule)
  },
  {
    path: `${AppRoutes.previsions}`,
    loadChildren: () => import('./modules/previsions/previsions.module').then(m => m.PrevisionsModule)
  }
]

const routes: Routes = [
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  {
    path: 'app',
    component: AppLayoutComponent,
    children: [
      { path: 'unauthorized', component: AccessDeniedComponent },
      {
        path: 'home',
        component: HomeComponent,
      },
      ...childModuleRoutes,
    ],
  },
  {
    path: AppRoutes.account,
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
  {
    path: "**",
    component: InvalidRouteComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
