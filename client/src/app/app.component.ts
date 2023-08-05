import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { CurrentUser } from './auth/type/current-user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'eltrello';

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe
      ({
        next: (res) => {
          console.log('res', res)
        },
        error: (err) => {
          console.log(err)
          this.authService.setCurrentUser(null)
        },
      })
  }
}
