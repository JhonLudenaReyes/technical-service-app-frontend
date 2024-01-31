import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { Role } from '../../interfaces/role.interface';

@Component({
  selector: 'app-role-register',
  templateUrl: './role-register.component.html',
  styleUrls: ['./role-register.component.css'],
  providers: [MessageService],
})
export class RoleRegisterComponent implements OnInit {
  role!: Role;
  roleId!: number;
  roleName: string = '';

  constructor(
    private roleService: RoleService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.roleService.role) {
      this.roleId = this.roleService.role.roleId || 0;
      this.roleName = this.roleService.role.roleName;
    }
  }

  save() {
    if (!this.roleId) {
      this.role = {
        roleName: this.roleName,
      };

      this.roleService
        .saveRole(this.role)
        .subscribe((response) => console.log(response));
    } else {
      this.role = {
        roleId: this.roleId,
        roleName: this.roleName,
      };

      this.roleService
        .updateRole(this.role)
        .subscribe((response) => this.clearRoleService());
    }

    this.addConfirmation();

    this.clearForm();
  }

  //METODO QUE LIMPIA LA VARIABLE PERSON DEL SERVICIO
  // LUEGO DE QUE SE HAYA EDITADO O REGRESADO A LA LISTA DE PERSONAS
  clearRoleService() {
    this.roleService.role = {
      roleId: 0,
      roleName: '',
    };
  }

  clearBackList() {
    this.clearRoleService();
    this.router.navigate(['role/roles-list']);
  }

  // MUESTRA MENSAJE DE CONFIRMACION DEL REGISTRO GUARDADO
  addConfirmation() {
    this.messageService.add({
      severity: 'success',
      summary: 'Estado de los datos',
      detail: 'Sus datos se han guardado satisfactoriamente',
    });
  }

  //LIMPIA EL FORMULARIO DE REGISTROS
  clearForm() {
    this.roleId = 0;
    this.roleName = '';
  }
}
