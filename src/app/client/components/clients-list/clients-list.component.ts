import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ClientData } from '../../interfaces/client-data.interface';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent implements OnInit {
  clients: ClientData[] = [];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.getListClients();
  }

  getListClients() {
    this.clientService
      .getClientsActive()
      .subscribe((response) => (this.clients = response));
  }

  addClient() {
    this.router.navigate(['client/client-register']);
  }

  editClient(client: ClientData) {}

  deleteClient(clientId: number) {}

  /*
  editPerson(person: ClientData) {
    this.clientService.addPerson(person);
    this.router.navigate(['person/register']);
  }

  deletePerson(personId: number) {
    this.clientService.deletePerson(personId).subscribe((response) => {
      this.getListPeople();
    });
  }*/
}
