import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas principales
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [AppComponent, RefreshDirective],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MessagesModule,
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
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
