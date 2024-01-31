import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../interfaces/role.interface';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  role!: Role;

  constructor(private http: HttpClient) {}

  getRolesActive(): Observable<Role[]> {
    return this.http.get<Role[]>(
      `https://localhost:7071/api/roles/get-active-roles`
    );
  }

  // Agrega un rol de la lista de roles para editar
  addRole(role: Role) {
    this.role = role;
  }

  saveRole(role: Role): Observable<Role> {
    return this.http.post<Role>(`https://localhost:7071/api/Roles`, role);
  }

  updateRole(role: Role): Observable<any> {
    return this.http.put<any>(
      `https://localhost:7071/api/Roles/${role.roleId}`,
      role
    );
  }
}
