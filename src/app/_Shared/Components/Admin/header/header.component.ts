import { Component, OnInit } from '@angular/core';
//service imports
import { AuthService } from 'src/app/_Core/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userdetails:any;
  constructor(
    private authService: AuthService
  ) {
    this.getDetails()
   }

  ngOnInit(): void {
  }

  //logout session
  logout() {
    let role = this.authService.getRole() || '';
    this.authService.logout(role.toLowerCase());
  }

  getimage(details:any) {
    return details.profImage ? details.profImage : 'assets/assets/img/undraw_profile.svg'
  }

  getDetails() {
    this.userdetails = this.authService.getUserDetails();
  }

}
