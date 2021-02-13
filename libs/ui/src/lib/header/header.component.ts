import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { TokenParams } from '../auth/TokenParams';

@Component({
  selector: 'artify-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public show: boolean = false;
  public Username: string = '';

  constructor(public authService: AuthService) {
    this.authService.getProfile().subscribe((data) => {
      this.Username = data.name;
    });
  }
  toggle() {
    this.show = !this.show;
  }
  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('token');
  }
}
