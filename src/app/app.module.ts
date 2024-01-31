import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './navigation/navigation.module';
import { LandingModule } from './landing/landing.module';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PersonModule } from './person/person.module';
import { RoleModule } from './role/role.module';
import { RefreshDirective } from './directives/refresh.directive';
import { GenderModule } from './gender/gender.module';
import { PanelModule } from './panel/panel.module';
import { ProfileModule } from './profile/profile.module';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [AppComponent, RefreshDirective],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PanelModule,
    NavigationModule,
    LandingModule,
    UserModule,
    DashboardModule,
    GenderModule,
    PersonModule,
    ClientModule,
    RoleModule,
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
