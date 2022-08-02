import { Component, OnInit } from '@angular/core';
// service
import { CollabService } from 'src/app/_Core/Services/collab.service';
import { AuthService } from 'src/app/_Core/Services/auth.service'

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  // variables
  collabList: any[] = [];

  constructor(private collabService: CollabService,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.getCollabList();
  }

  getCollabList(filter = 'Requested') {
    this.collabService.getCollabById(this.authService.getId(),filter).subscribe((res) => {
      if (res.status) {
        this.collabList = res.data
      }
    });
  }

  accept(id:any) {
    this.collabService.acceptCollab(id).subscribe(res => {
      if(res.status) {
        this.ngOnInit()
      }
    });
  }

}
