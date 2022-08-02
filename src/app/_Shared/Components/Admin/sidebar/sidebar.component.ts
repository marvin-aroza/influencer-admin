import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// services
import { AuthService } from 'src/app/_Core/Services/auth.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // variables
  sidebarConfig: boolean = false;
  type = 'INFLUENCER'

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(this.authService.getRole() === 'Admin') {
      this.sidebarConfig = true;
      this.type = 'ADMIN'
    }
  }

}
