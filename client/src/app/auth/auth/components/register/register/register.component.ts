import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error: string | null = null;
  form = this.fb.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, private authService: AuthService) { }


  onSubmit(): void {
    this.authService.register(this.form.value).subscribe({
      next: (currentUser) => {
        console.log('currentuser', currentUser)
        this.authService.setToken(currentUser)
        this.authService.setCurrentUser(currentUser)
      },
      error: (err: HttpErrorResponse) => {
        console.log('error', err.error)
      }
    })
  }
}
