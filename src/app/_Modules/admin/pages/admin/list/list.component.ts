import { Component, OnInit } from '@angular/core';
// service
import { AdminService } from 'src/app/_Core/Services/admin.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  // variables
  adminList: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAdminList();
  }

  getAdminList() {
    this.adminService.getUsers().subscribe((res) => {
      if (res.status) {
        this.adminList = res.data.map((result: any) => {
          result.status = result.isActive ? 'Active' : 'Inactive';
          return result;
        });
        console.log(this.adminList);
      }
    });
  }

  changeStatus(admin: any) {
    console.log(admin);
    let body = {
      isActive: !admin.isActive,
    };
    if (confirm('Are you sure want to change the status?')) {
      this.adminService.markStatusAdmin(admin._id, body).subscribe((res) => {
        if (res.status) {
          this.getAdminList();
        }
      });
    }
  }

  deleteAdmin(admin: any) {
    if (confirm('Are you sure want to delete?')) {
      this.adminService.deleteAdmin(admin._id).subscribe((res) => {
        if (res.status) {
          this.getAdminList();
        }
      });
    }
  }
}
