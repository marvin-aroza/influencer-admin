import { Component, OnInit } from '@angular/core';
// service
import { CollabService } from 'src/app/_Core/Services/collab.service';

@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.scss']
})
export class RejectedComponent implements OnInit {

  // variables
  collabList: any[] = [];

  constructor(private collabService: CollabService) {}

  ngOnInit(): void {
    this.getCollabList();
  }

  getCollabList(filter = 'Rejected') {
    this.collabService.getCollabList(filter).subscribe((res) => {
      if (res.status) {
        this.collabList = res.data
      }
    });
  }

}
