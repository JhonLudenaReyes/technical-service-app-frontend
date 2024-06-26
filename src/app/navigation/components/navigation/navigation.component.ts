import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { UserPersonRole } from 'src/app/user/interfaces/userPersonRole';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  items: MenuItem[] = [];
  habilitar: boolean = false;
  userLogin!: UserPersonRole;

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userLogin = JSON.parse(sessionStorage.getItem('userLogin') || '{}');

    if (this.userLogin.userId) {
      this.habilitar = true;
      this.addMenu();
    }
  }

  iniciarSesion() {
    this.router.navigate(['user/login']);
    this.items;
  }

  addMenu() {
    this.items = [
      /*
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Registrar usuario',
            icon: 'pi pi-fw pi-user',
            routerLink: 'user/register',
          },
        ],
      },
      {
        label: 'Persona',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Registrar persona',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: '/person/register',
          },
          {
            label: 'Listado de personas',
            icon: 'pi pi-fw pi-users',
            routerLink: '/person/list-person',
          },
        ],
      },
      {
        label: 'Género',
        icon: 'pi pi-fw pi-cog',
        routerLink: 'gender/genders-list',
      },
      {
        label: 'Rol',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Crear rol',
            icon: 'pi pi-fw pi-shield',
            routerLink: 'role/roles-list',
          },
        ],
      },
    */
    ];
  }

  cerrarSesion() {
    sessionStorage.removeItem('userLogin');
    this.habilitar = false;
    this.navigationService._navigationRefresh = false;
    localStorage.removeItem('panelState');
    localStorage.removeItem(`permissionsLogin`);
    this.items = [];
    this.router.navigate(['user/login']);
  }
}
