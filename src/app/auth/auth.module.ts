import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ],
  exports: [
    
  ]
})
export class AuthModule { }
