import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// service
import { UserService } from 'src/app/_Core/Services/user.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  // variables
  userDetails:any;
  userId = this.route.snapshot.params['id'];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserDetails()
  }

  //get admin details
  getUserDetails() {
    this.userService.getAdminById(this.userId).subscribe(res => {
      if(res.status) {
        this.userDetails = res.data;
      }
    });
  }

  // change status
  changeStatus() {
    let body = {
      isActive: !this.userDetails.isActive,
    };
    if (confirm('Are you sure want to change the status?')) {
      this.userService.markStatusAdmin(this.userDetails['_id'], body).subscribe((res) => {
        if (res.status) {
          this.ngOnInit();
        }
      });
    }
  }

}
