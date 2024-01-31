import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../interfaces/role.interface';
import { Permission } from 'src/app/permission/interfaces/permission.interface';
import { permissionCheck } from '../interfaces/permission.interface';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getRoleValuesActive(): Observable<Role[]> {
    return this.http.get<Role[]>(
      `https://localhost:7071/api/roles/get-active-roles-value`
    );
  }

  getPermissionsActive(): Observable<Permission[]> {
    return this.http.get<Permission[]>(
      `https://localhost:7071/api/permissions/get-permissions-active`
    );
  }

  getPermissionsActiveCheck(): Observable<permissionCheck[]> {
    return this.http.get<permissionCheck[]>(
      `https://localhost:7071/api/permissions/get-permissions-active-check`
    );
  }

  saveProfiles(profiles: Profile[]): Observable<string> {
    return this.http.post<string>(
      `https://localhost:7071/profiles-save`,
      profiles
    );
  }
}
