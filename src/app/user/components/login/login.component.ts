import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserPersonRole } from '../../interfaces/userPersonRole';
import { UserService } from '../../services/user.service';
import { NavigationService } from 'src/app/navigation/services/navigation.service';

import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent {
  userLogin!: UserPersonRole;
  user: string = '';
  password: string = '';

  constructor(
    private userService: UserService,
    private navigationService: NavigationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  iniciarSesion() {
    this.userService.getUserLogIn(this.user, this.password).subscribe({
      next: (response) => {
        this.userLogin = response;

        sessionStorage.setItem('userLogin', JSON.stringify(this.userLogin));
        localStorage.setItem(
          'panelState',
          JSON.stringify({ panelState: true })
        );

        console.log(this.userLogin.roleId);
        this.getLoginPermissions(this.userLogin.roleId);
        //console.log(this.userLogin.roleName);

        this.router.navigate(['dashboard/administrator']);

        /*switch (this.userLogin.roleName) {
          case 'SUPER-ADMINISTRADOR':
            this.router.navigate(['dashboard/administrator']);
            break;
          case 'ADMINISTRADOR':
            this.router.navigate(['dashboard/administrator']);
            break;
          case 'CLIENTE':
            this.router.navigate(['dashboard/client']);
            break;
          default:
            return;
        }*/

        this.navigationService._navigationRefresh = true;
      },
      error: (response) => {
        if (response.error.status === 404) {
          this.loginError();
        }
      },
    });
  }

  // MUESTRA MENSAJE INICIO DE SESIÓN FALLIDO
  loginError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Inicio de sesión fallido',
      detail: 'Su usuario o contraseña son incorrectos',
    });
  }

  // EXTRAE LOS PERMISOS QUE VA A MOSTRAR EL PANEL Y LAS INTERFACES
  getLoginPermissions(roleId: number) {
    this.userService.getLoginPermissions(roleId).subscribe((response) => {
      localStorage.setItem('permissionsLogin', JSON.stringify(response));
    });
  }
}
