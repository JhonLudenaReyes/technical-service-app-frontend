import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderRegisterComponent } from './components/gender-register/gender-register.component';
import { GendersListComponent } from './components/genders-list/genders-list.component';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

//Modulos para mensajes de confirmacion
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';

import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [GenderRegisterComponent, GendersListComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CardModule,
    ImageModule,
    ToastModule,
    BrowserAnimationsModule,
    MessagesModule,
    ConfirmDialogModule,
  ],
  exports: [GenderRegisterComponent, GendersListComponent],
})
export class GenderModule {}
