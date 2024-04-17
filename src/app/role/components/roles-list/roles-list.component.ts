import { Component, OnInit } from '@angular/core';
import { Role } from '../../interfaces/role.interface';

import { RoleService } from '../../services/role.service';

import { Router } from '@angular/router';

import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';

<<<<<<< HEAD
=======
import { HttpErrorResponse } from '@angular/common/http';

>>>>>>> project-v15
@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class RolesListComponent implements OnInit {
  roles!: Role[];

  constructor(
    private roleService: RoleService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRolesList();
  }

  addRoles() {
    this.router.navigate(['role/role-register']);
  }

  getRolesList() {
    this.roleService
      .getRolesActive()
      .subscribe((response) => (this.roles = response));
  }

  editRole(role: Role) {
    this.roleService.addRole(role);
    this.router.navigate(['role/role-register']);
  }

  deleteRole(event: Event, role: Role) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Está seguro que desea eliminar ${role.roleName} de la lista de roles?`,
      header: 'Eliminar Confirmación',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.roleService.deleteRole(role.roleId!).subscribe({
          next: () => {
            this.getRolesList();
            this.messageService.add({
              severity: 'info',
              summary: 'Confirmado',
              detail: 'Registro eliminado',
            });
          },
          error: (error) => {
            console.log(error);
<<<<<<< HEAD
            this.addError();
=======
            this.addError(error);
>>>>>>> project-v15
          },
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rechazado',
<<<<<<< HEAD
          detail: 'Has rechazado',
=======
          detail: `Has rechazado eliminar ${role.roleName} de la lista de roles`,
>>>>>>> project-v15
        });
      },
    });
  }

  // MUESTRA MENSAJE DE ERROR AL PROCESAR EL REGISTRO
<<<<<<< HEAD
  addError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Estado de los datos',
      detail: 'Sus datos no han podido ser procesados',
=======
  addError(error: HttpErrorResponse) {
    this.messageService.add({
      severity: 'error',
      summary: 'Sus datos no han podido ser procesados',
      detail: `Error: ${error.statusText}, ${error.message}.`,
>>>>>>> project-v15
    });
  }
}
