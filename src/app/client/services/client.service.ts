import { Injectable } from '@angular/core';
import { ClientData } from '../interfaces/client-data.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/person/interfaces/person.interface';
import { Client } from '../interfaces/client.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  person!: Person;

  constructor(private http: HttpClient) {}

  getClientsActive(): Observable<ClientData[]> {
    return this.http.get<ClientData[]>(
      `https://localhost:7071/api/Clients/active-clients/data-complete`
    );
  }

  getSearchPeopleActive(search: string): Observable<Person[]> {
    return this.http.get<Person[]>(
      `https://localhost:7071/api/People/search-people-active?Search=${search}`
    );
  }

  saveClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`https://localhost:7071/api/Clients`, client);
  }
}
