import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// service
import { AdminService } from 'src/app/_Core/Services/admin.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  // variables
  adminDetails:any;
  adminId = this.route.snapshot.params['id'];

  constructor(
    private adminService:AdminService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAdminDetails()
  }

  //get admin details
  getAdminDetails() {
    this.adminService.getAdminById(this.adminId).subscribe(res => {
      if(res.status) {
        this.adminDetails = res.data;
        console.log(this.adminDetails);
      }
    });
  }

  // change status
  changeStatus() {
    let body = {
      isActive: !this.adminDetails.isActive,
    };
    if (confirm('Are you sure want to change the status?')) {
      this.adminService.markStatusAdmin(this.adminDetails._id, body).subscribe((res) => {
        if (res.status) {
          this.ngOnInit();
        }
      });
    }
  }
}
