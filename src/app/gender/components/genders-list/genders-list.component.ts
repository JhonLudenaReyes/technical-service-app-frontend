import { Component, OnInit } from '@angular/core';
import { Gender } from '../../interfaces/gender.interface';
import { GenderService } from '../../services/gender.service';

import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genders-list',
  templateUrl: './genders-list.component.html',
  styleUrls: ['./genders-list.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class GendersListComponent implements OnInit {
  genders: Gender[] = [];

  constructor(
    private genderService: GenderService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getGendersList();
  }

  addGender() {
    this.router.navigate(['gender/register']);
  }

  getGendersList() {
    this.genderService
      .getGendersActive()
      .subscribe((response) => (this.genders = response));
  }

  editGender(gender: Gender) {
    this.genderService.addGender(gender);
    this.router.navigate(['gender/register']);
  }

  /*deleteGender(gender: Gender) {
    if (
      confirm(`¿Está seguro que desea eliminar el género ${gender.genderName}?`)
    ) {
      this.genderService
        .deleteGender(gender.genderId || 0)
        .subscribe((response) => {
          this.addConfirmation();
          this.getGendersList();
        });
    }
  }*/

  deleteGender(gender: Gender) {
    this.confirmationService.confirm({
      message: `¿Está seguro que desea eliminar el género ${gender.genderName}?`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.genderService
          .deleteGender(gender.genderId || 0)
          .subscribe((response) => {
            this.addConfirmation();
            this.getGendersList();
          });
      },
    });
  }

  // MUESTRA MENSAJE DE CONFIRMACION DEL REGISTRO GUARDADO
  addConfirmation() {
    this.messageService.add({
      severity: 'success',
      summary: 'Estado de los datos',
      detail: 'Sus datos han sido eliminados satisfactoriamente',
    });
  }
}
