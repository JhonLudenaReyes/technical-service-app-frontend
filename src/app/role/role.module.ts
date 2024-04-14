import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesListComponent } from './components/roles-list/roles-list.component';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { RoleRegisterComponent } from './components/role-register/role-register.component';

//Modulos para mensajes de confirmacion
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { RoleRoutingModule } from './role-routing.module';

@NgModule({
  declarations: [RolesListComponent, RoleRegisterComponent],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    FormsModule,
    CardModule,
    ImageModule,
    InputGroupModule,
    InputGroupAddonModule,
    ToastModule,
    MessagesModule,
    RoleRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [RolesListComponent],
})
export class RoleModule {}
