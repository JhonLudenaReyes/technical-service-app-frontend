import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation/services/navigation.service';
import { Permission } from './permission/interfaces/permission.interface';
import { Profile } from './profile/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'technical-service';

  navigationRefresh: boolean = false;

  permissionsLogin!: Profile[];

  constructor(private navigationService: NavigationService) {}
  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.navigationRefresh != this.navigationService._navigationRefresh) {
      this.navigationRefresh = this.navigationService._navigationRefresh;
    }

    this.permissionsLogin = JSON.parse(
      localStorage.getItem('permissionsLogin') || '[]'
    );
  }
}
