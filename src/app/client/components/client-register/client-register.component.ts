import { Component, OnInit } from '@angular/core';

import { Client } from '../../interfaces/client.interface';
import { ClientService } from '../../services/client.service';

import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css'],
  providers: [MessageService],
})
export class ClientRegisterComponent implements OnInit {
  client!: Client;

  personId!: number;
  name: string = '';
  lastName: string = '';
  identificationCard: string = '';
  cellPhone: string = '';
  address: string = '';

  clientId: number = 0;
  ruc: string = '';
  email: string = '';
  dateOfBirth: Date = new Date();
  hobby: string = '';

  constructor(
    private clientService: ClientService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.clientService.person) {
      this.personId = this.clientService.person.personId || 0;
      this.name = this.clientService.person.name;
      this.lastName = this.clientService.person.lastName;
      this.identificationCard = this.clientService.person.identificationCard;
      this.cellPhone = this.clientService.person.cellPhone;
      this.address = this.clientService.person.address;
    }
  }

  save() {
    if (!this.clientId) {
      this.client = {
        ruc: this.ruc,
        email: this.email,
        dateOfBirth: this.dateOfBirth,
        hobby: this.hobby,
      };

      this.clientService
        .saveClient(this.client)
        .subscribe((response) => console.log(response));
    } /* else {
      this.person = {
        personId: this.personId,
        name: this.name,
        lastName: this.lastName,
        identificationCard: this.identificationCard,
        cellPhone: this.cellPhone,
        address: this.address,
      };

      this.clientService
        .updatePerson(this.client)
        .subscribe((response) => this.clearPersonService());
    }

    */
    this.addConfirmation();

    this.clearForm();
  }

  //METODO QUE LIMPIA LA VARIABLE PERSON DEL SERVICIO
  // LUEGO DE QUE SE HAYA EDITADO O REGRESADO A LA LISTA DE PERSONAS
  clearPersonService() {
    /*this.clientService.person = {
      personId: 0,
      name: '',
      lastName: '',
      identificationCard: '',
      cellPhone: '',
      address: '',
    };*/
  }
  searchPerson() {
    this.router.navigate(['client/search-person']);
  }

  clearBackList() {
    /*  this.clearPersonService();*/
    this.router.navigate(['client/clients-list']);
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
    /*this.personId = 0;
    this.name = '';
    this.lastName = '';
    this.identificationCard = '';
    this.cellPhone = '';
    this.address = '';*/
  }
}
