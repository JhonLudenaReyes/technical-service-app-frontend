import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*import { AdministratorComponent } from './dashboard/components/administrator/administrator.component';
import { LandingComponent } from './landing/components/landing/landing.component';
import { ListPersonComponent } from './person/components/list-person/list-person.component';
import { PersonRegisterComponent } from './person/components/person-register/person-register.component';
import { LoginComponent } from './user/components/login/login.component';
import { RolesListComponent } from './role/components/roles-list/roles-list.component';
import { GenderRegisterComponent } from './gender/components/gender-register/gender-register.component';
import { GendersListComponent } from './gender/components/genders-list/genders-list.component';
import { RoleRegisterComponent } from './role/components/role-register/role-register.component';
import { ProfileRegisterComponent } from './profile/components/profile-register/profile-register.component';
import { ClientRegisterComponent } from './client/components/client-register/client-register.component';
import { ClientsListComponent } from './client/components/clients-list/clients-list.component';
import { ClientSearchComponent } from './client/components/client-search/client-search.component';
*/

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'person',
    loadChildren: () =>
      import('./person/person.module').then((m) => m.PersonModule),
  },
  {
    path: 'gender',
    loadChildren: () =>
      import('./gender/gender.module').then((m) => m.GenderModule),
  },
  {
    path: 'role',
    loadChildren: () => import('./role/role.module').then((m) => m.RoleModule),
  },
  /*
  {
    path: 'dashboard/administrator',
    component: AdministratorComponent,
  },
  {
    path: 'gender/genders-list',
    component: GendersListComponent,
  },
  {
    path: 'gender/register',
    component: GenderRegisterComponent,
  },
  {
    path: 'person/people-list',
    component: ListPersonComponent,
  },
  {
    path: 'person/register',
    component: PersonRegisterComponent,
  },
  {
    path: 'client/client-register',
    component: ClientRegisterComponent,
  },
  {
    path: 'client/clients-list',
    component: ClientsListComponent,
  },
  {
    path: 'client/search-person',
    component: ClientSearchComponent,
  },
  {
    path: 'role/roles-list',
    component: RolesListComponent,
  },
  {
    path: 'role/role-register',
    component: RoleRegisterComponent,
  },
  {
    path: 'profile/profile-register',
    component: ProfileRegisterComponent,
  }*/ {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
