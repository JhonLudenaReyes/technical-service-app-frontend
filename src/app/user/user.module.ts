import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

//Modulos para mensajes de confirmacion
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [LoginComponent, UserComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    FormsModule,
    CardModule,
    ImageModule,
    ToastModule,
    BrowserAnimationsModule,
    MessagesModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent, UserComponent],
})
export class UserModule {}
