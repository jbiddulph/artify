import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'artify-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public show: boolean = false;

  constructor(public authService: AuthService) {}
  toggle() {
    this.show = !this.show;
  }
  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('token');
  }
}
