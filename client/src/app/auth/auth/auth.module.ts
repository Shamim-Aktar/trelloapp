import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
