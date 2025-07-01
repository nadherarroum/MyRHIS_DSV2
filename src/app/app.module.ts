import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvalidRouteComponent } from './components/invalid-route/invalid-route.component';
import { HomeComponent } from './components/home/home.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppSideBarComponent } from './layout/app-side-bar/app-side-bar.component';
import { SharedModule } from './shared/shared.module';
import { AppHeaderComponent } from './layout/app-header/app-header.component';

const layoutComponents = [
  AppFooterComponent,
  AppSideBarComponent,
  AppHeaderComponent
];

@NgModule({
  declarations: [
    AppComponent,
    InvalidRouteComponent,
    HomeComponent,
    AppLayoutComponent,
    ...layoutComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
exports: [...layoutComponents]
})
export class AppModule { }
