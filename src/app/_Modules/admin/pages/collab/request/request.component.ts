import { Component, OnInit } from '@angular/core';
// service
import { CollabService } from 'src/app/_Core/Services/collab.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  // variables
  collabList: any[] = [];

  constructor(private collabService: CollabService) {}

  ngOnInit(): void {
    this.getCollabList();
  }

  getCollabList(filter = 'Requested') {
    this.collabService.getCollabList(filter).subscribe((res) => {
      if (res.status) {
        this.collabList = res.data
      }
    });
  }

}
