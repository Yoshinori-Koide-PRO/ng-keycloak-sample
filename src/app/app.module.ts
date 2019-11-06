import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './util/init-app';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfigComponent } from './pages/config/config.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConfigComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
