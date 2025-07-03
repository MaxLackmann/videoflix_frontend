
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuthenticated = false;

  constructor(private auth: AuthService) {
    this.auth.isAuthenticated$.subscribe(
      status => this.isAuthenticated = status
    );
  }


  logout() {
    this.auth.logout();
  }
}
