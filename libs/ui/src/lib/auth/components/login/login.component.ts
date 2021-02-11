import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    const loginObserver = {
      next: () => console.log('User Logged in'),
      error: (err) => console.log(err),
    };
    this.authService.login(f.value).subscribe(loginObserver);
  }
}
