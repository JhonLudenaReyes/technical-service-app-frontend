import { Component, OnInit } from '@angular/core';
import { Gender } from '../../interfaces/gender.interface';
import { GenderService } from '../../services/gender.service';

import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gender-register',
  templateUrl: './gender-register.component.html',
  styleUrls: ['./gender-register.component.css'],
  providers: [MessageService],
})
export class GenderRegisterComponent implements OnInit {
  gender!: Gender;

  genderId!: number;
  genderName: string = '';

  constructor(
    private genderService: GenderService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.genderService.gender) {
      this.genderId = this.genderService.gender.genderId || 0;
      this.genderName = this.genderService.gender.genderName;
    }
  }

  save() {
    if (!this.genderId) {
      this.gender = {
        genderName: this.genderName,
      };

      this.genderService
        .saveGender(this.gender)
        .subscribe((response) => console.log(response));
    } else {
      this.gender = {
        genderId: this.genderId,
        genderName: this.genderName,
      };

      this.genderService
        .updateGender(this.gender)
        .subscribe((response) => this.clearGenderService());
    }

    this.addConfirmation();

    this.clearForm();
  }

  //METODO QUE LIMPIA LA VARIABLE PERSON DEL SERVICIO
  // LUEGO DE QUE SE HAYA EDITADO O REGRESADO A LA LISTA DE PERSONAS
  clearGenderService() {
    this.genderService.gender = {
      genderId: 0,
      genderName: '',
    };
  }

  clearBackList() {
    this.clearGenderService();
    this.router.navigate(['gender/genders-list']);
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
    this.genderId = 0;
    this.genderName = '';
  }
}
