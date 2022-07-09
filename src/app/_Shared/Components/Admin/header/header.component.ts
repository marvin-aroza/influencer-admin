import { Component, OnInit } from '@angular/core';
//service imports
import { AuthService } from 'src/app/_Core/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  //logout session
  logout() {
    this.authService.logout();
  }

}
