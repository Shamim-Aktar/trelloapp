import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]
@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
