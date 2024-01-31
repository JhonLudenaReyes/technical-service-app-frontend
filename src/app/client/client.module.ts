import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { CalendarModule } from 'primeng/calendar';

//Modulos para mensajes de confirmacion
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { ClientSearchComponent } from './components/client-search/client-search.component';

@NgModule({
  declarations: [
    ClientsListComponent,
    ClientRegisterComponent,
    ClientSearchComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    FormsModule,
    CardModule,
    ImageModule,
    ToastModule,
    BrowserAnimationsModule,
    MessagesModule,
    CalendarModule,
  ],
})
export class ClientModule {}
