import { Component, OnInit } from '@angular/core';
import { Role } from '../../interfaces/role.interface';

import { RoleService } from '../../services/role.service';

import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css'],
  providers: [MessageService],
})
export class RolesListComponent implements OnInit {
  roles: Role[] = [];

  constructor(
    private roleService: RoleService,
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

  deleteRole(role: any) {}
}
