import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';
import { ClientSearchComponent } from './components/client-search/client-search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'clients-list',
        component: ClientsListComponent,
      },
      {
        path: 'client-register',
        component: ClientRegisterComponent,
      },
      {
        path: 'search-person',
        component: ClientSearchComponent,
      },
      {
        path: '**',
        redirectTo: 'clients-list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ClientRoutingModule {}
