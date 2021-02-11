import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    const registerObserver = {
      next: () => console.log('User created'),
      error: (err) => console.log(err),
    };
    this.authService.register(f.value).subscribe(registerObserver);
  }
}
