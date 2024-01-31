import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gender } from '../interfaces/gender.interface';

@Injectable({
  providedIn: 'root',
})
export class GenderService {
  constructor(private http: HttpClient) {}

  gender!: Gender;

  getGendersActive(): Observable<Gender[]> {
    return this.http.get<Gender[]>(
      `https://localhost:7071/genders/list-active-genders`
    );
  }

  // Agrega una persona de la lista de personas para editar
  addGender(gender: Gender) {
    this.gender = gender;
  }

  saveGender(gender: Gender): Observable<Gender> {
    return this.http.post<Gender>(`https://localhost:7071/api/Genders`, gender);
  }

  updateGender(gender: Gender): Observable<any> {
    return this.http.put<any>(
      `https://localhost:7071/api/Genders/${gender.genderId}`,
      gender
    );
  }

  deleteGender(genderId: number): Observable<any> {
    return this.http.delete<any>(
      `https://localhost:7071/api/Genders/${genderId}`
    );
  }
}
