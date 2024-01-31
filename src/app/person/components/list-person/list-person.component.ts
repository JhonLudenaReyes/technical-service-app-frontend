import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person.interface';
import { PersonService } from '../../services/person.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css'],
})
export class ListPersonComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.getListPeople();
  }

  getListPeople() {
    this.personService
      .getPeopleActive()
      .subscribe((response) => (this.people = response));
  }

  addPerson() {
    this.router.navigate(['person/register']);
  }

  editPerson(person: Person) {
    this.personService.addPerson(person);
    this.router.navigate(['person/register']);
  }

  deletePerson(personId: number) {
    this.personService.deletePerson(personId).subscribe((response) => {
      this.getListPeople();
    });
  }
}
