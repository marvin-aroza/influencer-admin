import { Component, OnInit } from '@angular/core';
// service
import { CollabService } from 'src/app/_Core/Services/collab.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  // variables
  collabList: any[] = [];

  constructor(private collabService: CollabService) {}

  ngOnInit(): void {
    this.getCollabList();
  }

  getCollabList(filter = 'Accepted') {
    this.collabService.getCollabList(filter).subscribe((res) => {
      if (res.status) {
        this.collabList = res.data
      }
    });
  }

}
