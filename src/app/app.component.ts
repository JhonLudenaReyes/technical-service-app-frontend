import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'technical-service';

  navigationRefresh: boolean = false;
  panelState!: boolean;

  constructor(private navigationService: NavigationService) {}
  ngOnInit(): void {
    //CONSULTAR SI EXISTE PARAMETROS EN EL LOCALSTORAGE
    if (localStorage.length > 0) {
      let storeState = JSON.parse(localStorage.getItem('panelState') || '');
      if (storeState == '') {
        this.panelState = false;
      } else {
        this.panelState = storeState.panelState;
      }
    }
  }

  ngDoCheck(): void {
    if (this.navigationRefresh != this.navigationService._navigationRefresh) {
      this.navigationRefresh = this.navigationService._navigationRefresh;
      if (localStorage.length > 0) {
        console.log(JSON.parse(localStorage.getItem('panelState') || ''));
        let storeState = JSON.parse(localStorage.getItem('panelState') || '');
        this.panelState = storeState.panelState;
      }
    }
  }
}
