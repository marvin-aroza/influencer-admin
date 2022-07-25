import { Component, OnInit } from '@angular/core';
// service
import { UserService } from 'src/app/_Core/Services/user.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // varibales
  userList = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserList()
  }

  // get user list
  getUserList() {
    this.userService.getUsers().subscribe(res => {
      if(res.status) {
        this.userList = res.data
      }
    });
  }

  // change status
  changeStatus(user: any) {
    let body = {
      isActive: !user.isActive,
    };
    if (confirm('Are you sure want to change the status?')) {
      this.userService.markStatusAdmin(user._id, body).subscribe((res) => {
        if (res.status) {
          this.getUserList();
        }
      });
    }
  }

  deleteAdmin(user: any) {
    if (confirm('Are you sure want to delete?')) {
      this.userService.deleteAdmin(user._id).subscribe((res) => {
        if (res.status) {
          this.getUserList();
        }
      });
    }
  }

}
