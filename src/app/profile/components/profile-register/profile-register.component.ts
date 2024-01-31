import { Component, OnInit } from '@angular/core';
import { Role } from '../../interfaces/role.interface';
import { ProfileService } from '../../services/profile.service';
import { Permission } from 'src/app/permission/interfaces/permission.interface';
import { permissionCheck } from '../../interfaces/permission.interface';
import { Profile } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-profile-register',
  templateUrl: './profile-register.component.html',
  styleUrls: ['./profile-register.component.css'],
})
export class ProfileRegisterComponent implements OnInit {
  profiles: Profile[] = [];
  profile: Profile = { permissionId: 0, roleId: 0 };
  roles: Role[] = [];
  selectedRole!: Role;

  permissions: Permission[] = [];

  permissionsCheck: permissionCheck[] = [];

  selectedPermissionsCheck: any[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getRolesValuesActive();
    this.getPermissionsActiveCheck();
  }
  clearBackList() {}

  save() {
    console.log(this.selectedPermissionsCheck);
    console.log(this.selectedRole);
    this.selectedPermissionsCheck.map((permission) => {
      this.profile.roleId = this.selectedRole.code;
      this.profile.permissionId = permission.key;
      this.profiles.push(this.profile);
      this.profile = { permissionId: 0, roleId: 0 };
    });
    console.log(this.profiles);
    this.profileService
      .saveProfiles(this.profiles)
      .subscribe((response) => console.log(response));
    this.profiles = [];
  }

  getRolesValuesActive() {
    this.profileService
      .getRoleValuesActive()
      .subscribe((response) => (this.roles = response));
  }

  getPermissionsActiveCheck() {
    this.profileService.getPermissionsActiveCheck().subscribe((response) => {
      this.permissionsCheck = response;
      console.log(this.permissionsCheck);
    });
  }
}
