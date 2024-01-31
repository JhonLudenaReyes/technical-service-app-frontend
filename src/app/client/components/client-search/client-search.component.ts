import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Person } from 'src/app/person/interfaces/person.interface';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css'],
  providers: [MessageService],
})
export class ClientSearchComponent implements OnInit {
  people: Person[] = [];
  search: string = '';

  constructor(
    private clientService: ClientService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* if (this.genderService.gender) {
      this.genderId = this.genderService.gender.genderId || 0;
      this.genderName = this.genderService.gender.genderName;
    }*/
  }

  addPerson() {
    this.router.navigate(['person/register']);
  }

  searchPerson() {
    this.clientService
      .getSearchPeopleActive(this.search)
      .subscribe((response) => (this.people = response));
    this.clearForm();
  }

  selectPerson(person: Person) {
    this.clientService.person = person;
    this.router.navigate(['client/client-register']);
  }

  //METODO QUE LIMPIA LA VARIABLE PERSON DEL SERVICIO
  // LUEGO DE QUE SE HAYA EDITADO O REGRESADO A LA LISTA DE PERSONAS
  clearGenderService() {
    /*this.genderService.gender = {
      genderId: 0,
      genderName: '',
    };*/
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
    this.search = '';
  }
}
