import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GendersListComponent } from './components/genders-list/genders-list.component';
import { GenderRegisterComponent } from './components/gender-register/gender-register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'genders-list',
        component: GendersListComponent,
      },
      {
        path: 'gender-register',
        component: GenderRegisterComponent,
      },
      {
        path: '**',
        redirectTo: 'genders-list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class GenderRoutingModule {}
