import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRegisterComponent } from './components/profile-register/profile-register.component';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

//Modulos para mensajes de confirmacion
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';

import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [ProfileRegisterComponent],
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
    ConfirmDialogModule,
    DropdownModule,
    CheckboxModule,
  ],
})
export class ProfileModule {}
