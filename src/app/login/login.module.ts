import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AppLoginComponent } from './app-login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthService],
  declarations: [AppLoginComponent]
})
export class LoginModule { }
