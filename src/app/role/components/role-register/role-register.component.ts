import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { Role } from '../../interfaces/role.interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-role-register',
  templateUrl: './role-register.component.html',
  styleUrls: ['./role-register.component.css'],
  providers: [MessageService],
})
export class RoleRegisterComponent implements OnInit {
  //Creación de la propiedad para el formulario reactivo
  roleForm!: FormGroup;

  //Getters de los parámetros del formulario reactivo
  get roleName() {
    return this.roleForm.get('roleName') as FormControl;
  }

  role!: Role;
  roleId!: number;

  constructor(
    private readonly fb: FormBuilder,
    private roleService: RoleService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Añadiendo campos y validaciones a la propiedad del formulario reactivo
    this.roleForm = this.initForm();

    if (this.roleService.role) {
      this.roleId = this.roleService.role.roleId || 0;
      this.roleForm.patchValue({
        roleName: this.roleService.role.roleName,
      });
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      roleName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  onSubmit(): void {
    if (!this.roleId) {
      this.role = {
        roleName: this.roleForm.get('roleName')?.value,
      };

      this.roleService.saveRole(this.role).subscribe({
        next: () => {
          this.addConfirmation();
          this.roleForm.reset();
        },
        error: (error) => {
          console.log(error);
          this.addError();
        },
      });
    } else {
      this.role = {
        roleId: this.roleId,
        roleName: this.roleForm.get('roleName')?.value,
      };

      this.roleService.updateRole(this.role).subscribe({
        next: () => {
          this.addConfirmation();
          this.roleForm.reset();
          this.clearRoleService;
        },
        error: (error) => {
          console.log(error);
          this.addError();
        },
      });
    }
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

  // MUESTRA MENSAJE DE ERROR AL PROCESAR EL REGISTRO
  addError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Estado de los datos',
      detail: 'Sus datos no han podido ser procesados',
    });
  }
}
